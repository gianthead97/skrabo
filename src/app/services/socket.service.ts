import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private URL: string = 'http://localhost:';;
  private sock = io(this.URL);
  constructor(private http: Http) {
    console.log(process.env.PORT);
    this.http.get(window.location.origin + '/socketPort').subscribe((response: Response) => {
      console.log(response.json());
    });
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
