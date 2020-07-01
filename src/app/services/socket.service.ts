import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private readonly URL: string = 'http://localhost:3000';
  private sock = io(this.URL);
  constructor() {

  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
