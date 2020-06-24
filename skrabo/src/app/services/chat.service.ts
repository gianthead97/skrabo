import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';
import { UserData } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})

export class ChatService {
    private readonly url = 'http://localhost:3000';
    private socket;
    private user: UserData;

    constructor(private http: HttpClient) {
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
                 .subscribe(code => console.log(code));
    }

    public sendMessage(message) {
        this.user.message = message;
        this.socket.emit('new-message', {
            message: `${this.user.name}: ${this.user.message}`,
            color: this.user.color
        });
    }

    public getMessages() {
        return new Observable((observer) => {
            this.socket.on('message', ({message, color}) => {
                observer.next({message, color});
            });
        });
    }
}
