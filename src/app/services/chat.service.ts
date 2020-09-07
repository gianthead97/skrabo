import { Injectable, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import * as io from 'socket.io-client';
import { UserData } from '../models/user.model';
import { HttpErrorHandler } from '../utils/http-error-handler.model';
import { SocketService } from './socket.service';
import { Rules, Language } from '../models/rules.model';
import { Subscription } from 'rxjs';
import { Player } from '../models/player.model';
import { Word } from '../models/word.model';

import * as Constants from '../../../const.js';
import { PlayerListComponent } from '../player-list/player-list.component';

@Injectable({
    providedIn: 'root',
})

export class ChatService extends HttpErrorHandler implements OnDestroy {

    private formData: Rules;
    private _code: string;
    private _roomName: string;
    private _roomLanguage: Language;
    private _roomTime: Rules;
    private rulesData;

    // TODO url kada se deployuje na heroku treba biti prazan string, ovo se mora uraditi programaticno a ne ovako
    // private url = '';

    private url = Constants.urlString;
    private subscriptions: Subscription[] = [];

    constructor(private socketService: SocketService, private http: HttpClient, router: Router) {
        super(router);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }


    public joinToRoom(code: string): void {
        this._code = code;
        this.socketService.socket.emit(Constants.joinGame, { code: code, username: this.username, admin: false });
    }

    public createNewRoomRequest(roomName: string): void {
        this.adminPermission = true;
        this.isUserTurn = true;
        this.http.post<string>(this.socketService.url + '/createRoom', { name: roomName })
            .pipe(catchError(super.handleError()))
            .subscribe((code: string) => {
                window.alert(code);
                this._code = code;
                this.socketService.socket.emit(Constants.joinGame, { code, username: this.username, admin: true });
                this.sendRules({ id: this._code, ...this.rulesData });
            });
    }

    public sendMessage(message) {
        this.socketService.user.message = message;
        if (this.socketService.user.message.trim().length !== 0) {
            this.socketService.socket.emit(Constants.newMessage, {
                message: `${this.socketService.user.name}: ${this.socketService.user.message}`,
                color: this.socketService.user.color
            });
        }
    }

    public getMessages(): Observable<any> {
        return new Observable((observer) => {
            this.socketService.socket.on(Constants.message, ({ message, color }) => {
                observer.next({ message, color });
            });
        });
    }

    /**
    * description: Function that signals to server to start game.
    */
    public startGame(): void {
        this.socketService.socket.emit(Constants.startGame, {});
    }
    // get guessed
    public getSound(): Observable<any> {
        return new Observable((observer) => {
            this.socketService.socket.on(Constants.guessedSound, () => {
                observer.next();
            });
        });
    }

    // wordChosen
    public getWord(): Observable<any> {
        return new Observable((observer) => {
            this.socketService.socket.on(Constants.wordChosen, ({ word }) => {
                observer.next({ word });
            });
        });
    }

    public getDashes(): Observable<any> {
        return this.http.get<string>(this.url + '/getDashes/' + this._code);
    }

    public sendWord(word) {
        this.socketService.socket.emit(Constants.wordChosen, {
            word
        });
    }

    getRoomName(): Observable<string> {
        return this.http.get<string>(this.url + '/getName/' + this._code);
    }

    getProfileIndex(): Observable<string> {
        return this.http.get<string>(this.url + '/getProfileIndex/' + this._code);
    }

    public sendRules(data): void {
        console.log({ id: this._code, ...data });
        let sub: Subscription;
        sub = this.http.patch<Rules>(this.url + '/sendRules', { id: this._code, ...data })
            .pipe(catchError(super.handleError))
            .subscribe((data: Rules) => {
                console.log(data);
            });
        this.subscriptions.push(sub);
    }


    public getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.url + '/getPlayers/' + this._code);
    }

    public getWords(): Observable<Word[]> {
        return this.http.get<Word[]>(this.url + '/getWords');
    }

    get getSocketService() {
        return this.socketService;
    }

    get code(): string {
        return this._code;
    }
    set code(value: string) {
        this._code = value;
    }

    get roomName(): string {
        return this._roomName;
    }

    set roomName(value: string) {
        this._roomName = value;
    }

    get adminPermission(): boolean {
        return this.socketService.user.isAdmin;
    }

    set adminPermission(newValue: boolean) {
        this.socketService.user.isAdmin = newValue;
    }

    get isUserTurn() {
        return this.socketService.user.isTurn;
    }

    set isUserTurn(newValue: boolean) {
        this.socketService.user.isTurn = newValue;
    }

    get userColor() {
        return this.socketService.user.color;
    }

    get username() {
        return this.socketService.user.name;
    }
    set username(username: string) {
        if (username.trim().length !== 0) {
            this.socketService.user.name = username;
        }
    }

    get rules() {
        return this.rulesData;
    }

    set rules(data) {
        this.rulesData = data;
    }
}
