import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
import { CanvasData } from '../models/canvasData.model';
import { SocketService } from './socket.service';
import * as Constants from '../../../const.js';
import { ChatService } from './chat.service';



@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(private socketService: SocketService, private chatService: ChatService) {


  }

  public sendCanvasData(data) {
    this.socketService.socket.emit(Constants.clientDrawing, data);
  }

  public getCanvasEvent() {
    return new Observable((observer) => {
      this.socketService.socket.on(Constants.drawing, (data: CanvasData) => {
        observer.next(data);
      });
    });
  }

  public getUserTurn() {
    return new Observable((observer) => {
      observer.next(this.chatService.isUserTurn);
    });
  }

  public setTogglingCanvas(board: HTMLCanvasElement, init: () => void, deinit: () => void): void {
    this.socketService.socket.on(Constants.toggleCanvas, (playerName: string) => {
      playerName === this.socketService.user.name ? init() : deinit();
    });
  }
}
