import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  roomName: Observable<string>;
  constructor(private chatService: ChatService) {
    this.roomName = this.getRoomName();
  }

  ngOnInit(): void {
  }
  getRoomName(): Observable<string> {
    if (this.chatService.roomName) {
      return of(this.chatService.roomName);
    } else {
      return this.chatService.getRoomName();
    }
  }
}
