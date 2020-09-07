import {Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';

import { urlString } from '../../../const';
import { UserData } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  // FIXME url kada se deployuje na heroku treba biti prazan string, ovo se mora uraditi programaticno a ne ovako
  // private URL = '';
  private URL = urlString;
  private sock = io(this.URL);
  public user: UserData;
  constructor(private http: HttpClient) {
    this.user = new UserData('', 0, '', '', false, false);
  }

  get socket() {
    return this.sock;
  }
  get url(): string {
    return this.URL;
  }

}
