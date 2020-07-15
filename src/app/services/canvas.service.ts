import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
import { CanvasData } from '../models/canvasData.model';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor(private socketService: SocketService) {
    
  }

  public sendCanvasData(data) {
    this.socketService.socket.emit('client-drawing', data);
  }

  public getCanvasEvent() {
    return new Observable((observer) => {
      this.socketService.socket.on('drawing', (data: CanvasData) => {
        observer.next(data);
      });
    });
  }
}
