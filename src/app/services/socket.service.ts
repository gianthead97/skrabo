import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'http://localhost:';
  private sock;
  constructor(private http: HttpClient) {
    this.http.get<{url}>(window.location.origin + '/socketPort').subscribe(response => {
      this.URL += response.url;
      this.sock = io(this.URL);
      
    });
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
