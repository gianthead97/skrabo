import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';
import { UserData } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;
    private user: UserData;

    constructor() {
        this.socket = io(this.url);
        this.user = new UserData('', 0, '', '');
    }

    public setUsername(username: string) {
        this.user = new UserData(username, 0, '', '');
    }

    public getColor() {
        return this.user.color;
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
