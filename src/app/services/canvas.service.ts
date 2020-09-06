import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
import { CanvasData } from '../models/canvasData.model';
import { SocketService } from './socket.service';
import * as Constants from '../../../const.js';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(private socketService: SocketService) {

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
}
