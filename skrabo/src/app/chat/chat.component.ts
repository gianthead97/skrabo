import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
//import {Observable} from 'rxjs/Observable';
//import as Rx from 'rxjs/Rx';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private socket;
  private message; // skloni private 



  constructor() { }

  ngOnInit(): void {
  }


  public onSend(){
    this.socket.emit('msg',"");
  }


}
