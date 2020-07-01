import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'http://localhost:' + (process.env.PORT || 3000);
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
