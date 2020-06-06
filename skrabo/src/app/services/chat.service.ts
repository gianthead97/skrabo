import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';

@Injectable({
    providedIn: 'root',
})

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;
    private username: string;

    constructor() {
        this.socket = io(this.url);
    }

    public setUsername(username: string) {
        this.username = username;
    }

    public sendMessage(message) {
        this.socket.emit('new-message', `${this.username}: ${message}`);
    }

    public getMessages() {
        return new Observable((observer) => {
            this.socket.on('message', (message) => {
                observer.next(message);
            });
        });
    }
}
