import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  // FIXME url kada se deployuje na heroku treba biti prazan string, ovo se mora uraditi programaticno a ne ovako
  // private URL = '';
  private URL = 'http://localhost:3000';
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
