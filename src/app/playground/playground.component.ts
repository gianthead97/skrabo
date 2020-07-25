import { Component, OnInit } from '@angular/core';
import {GameInfoFormComponent} from '../game-info-form/game-info-form.component';

import {ChatService} from '../services/chat.service';
import { MatDialog} from '@angular/material/dialog';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  roomName: Observable<string>;
  constructor(private chatService: ChatService, private dialog: MatDialog) {
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
