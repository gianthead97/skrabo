import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'http://localhost:3000';
  private sock = io(this.URL);
  constructor(private http: HttpClient) {
    // this.http.get<{url}>('http://localhost:3000' + '/socketPort', {
    //   withCredentials: false
    // }).subscribe(response => {
    //   this.URL += response.url;
    //   console.log(this.URL);
    //   this.sock = io(this.URL);
      
    // });
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
