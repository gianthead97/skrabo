import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as io from 'socket.io-client';
import { CanvasData } from '../models/canvasData.model';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendCanvasData(data) {
    this.socket.emit('client-drawing', data);
  }

  public getCanvasEvent() {
    return new Observable((observer) => {
      this.socket.on('drawing', (data) => {
        observer.next(data);
      });
    });
  }
}
