import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'https://skrabo.herokuapp.com:' + (process.env.PORT || 3000);
  //private URL = 'http://localhost:3000';
  private sock = io(this.URL);
  constructor(private http: HttpClient) {
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
