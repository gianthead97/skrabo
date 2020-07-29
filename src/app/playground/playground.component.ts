import { Component, OnInit } from '@angular/core';

import {ChatService} from '../services/chat.service';
import {Observable, of} from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GameInfoFormComponent } from '../game-info-form/game-info-form.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  roomName: Observable<string>;
  
  constructor(private chatService: ChatService, private dialog: MatDialog) {
    this.roomName = this.getRoomName();
    if (this.chatService.adminPermission) {
      this.dialog.open(GameInfoFormComponent, {
        width: "450"
      });
    }
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
