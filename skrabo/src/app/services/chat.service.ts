import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import * as io from 'socket.io-client';
import { UserData } from '../models/user.model';
import { HttpErrorHandler } from '../utils/http-error-handler.model';

@Injectable({
    providedIn: 'root',
})

export class ChatService extends HttpErrorHandler {
    private readonly url = 'http://localhost:3000';

    private socket;
    private user: UserData;

    constructor(private http: HttpClient, router: Router) {
        super(router);
        this.socket = io(this.url);
        this.user = new UserData('', 0, '', '');
    }

    public setUsername(username: string) {
        this.user = new UserData(username, 0, '', '');
    }

    public getColor() {
        return this.user.color;
    }

    public joinToRoom(code: string): void {
        this.socket.emit('joinGame', {code});
    }

    public createNewRoomRequest(roomName: string): void {
        this.http.post(this.url + '/createRoom', {"name": roomName})
                 .pipe(catchError(super.handleError()))
                 .subscribe(code => {
                    this.socket.emit('joinGame', code);
                    window.alert(code);
                 });
    }

    public sendMessage(message) {
        this.user.message = message;
        this.socket.emit('new-message', {
            message: `${this.user.name}: ${this.user.message}`,
            color: this.user.color
        });
    }

    public getMessages(): Observable<any> {
        return new Observable((observer) => {
            this.socket.on('message', ({message, color}) => {
                observer.next({message, color});
            });
        });
    }
}
