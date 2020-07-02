import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'http://localhost:';
  private sock = io(this.URL);
  constructor(private http: HttpClient) {
    console.log(process.env.PORT);
    this.http.get(window.location.origin + '/socketPort').subscribe(response => {
      console.log(response);
    });
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
