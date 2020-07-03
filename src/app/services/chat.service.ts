import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import * as io from 'socket.io-client';
import { UserData } from '../models/user.model';
import { HttpErrorHandler } from '../utils/http-error-handler.model';
import { SocketService } from './socket.service';

@Injectable({
    providedIn: 'root',
})

export class ChatService extends HttpErrorHandler {

    private user: UserData;

    constructor(private socketService: SocketService, private http: HttpClient, router: Router) {
        super(router);
        this.user = new UserData('', 0, '', '');
    }

    public setUsername(username: string) {
        this.user = new UserData(username, 0, '', '');
    }

    public getColor() {
        return this.user.color;
    }

    public joinToRoom(code: string): void {
        this.socketService.socket.emit('joinGame', {code});
    }

    public createNewRoomRequest(roomName: string): void {
        console.log('happens');
        this.http.post(this.socketService.url + '/createRoom', {"name": roomName})
                 .pipe(catchError(super.handleError()))
                 .subscribe(code => {
                    this.socketService.socket.emit('joinGame', code);
                    window.alert(code);
                 });
    }

    public sendMessage(message) {
        this.user.message = message;
        this.socketService.socket.emit('new-message', {
            message: `${this.user.name}: ${this.user.message}`,
            color: this.user.color
        });
    }

    public getMessages(): Observable<any> {
        return new Observable((observer) => {
            this.socketService.socket.on('message', ({message, color}) => {
                observer.next({message, color});
            });
        });
    }
}
