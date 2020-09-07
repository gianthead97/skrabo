import { Component, OnInit } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { Constants } from '../../../const';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { GameInfoFormComponent } from '../game-info-form/game-info-form.component';
import { element } from 'protractor';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  roomName: Observable<string>;
  word = [];

  constructor(private chatService: ChatService, private dialog: MatDialog) {
    this.roomName = this.getRoomName();
    // if (this.chatService.adminPermission) {
    //   this.dialog.open(GameInfoFormComponent, {
    //     width: "450"
    //   });
    // }

    this.chatService
      .getWord()
      .subscribe(({ word }) => {
        this.word = word.split('');
      });
  }

  ngOnInit(): void {
    this.chatService.getDashes().subscribe((word) => {
      this.word = word.split('');
    });
  }

  getRoomName(): Observable<string> {
    if (this.chatService.roomName) {
      return of(this.chatService.roomName);
    } else {
      return this.chatService.getRoomName();
    }
  }

  isUserTurn(): boolean {
    return this.chatService.isUserTurn;
  }

  isCreator(): boolean {
    return this.chatService.adminPermission;
  }

  onStartGame(event: Event): void {
    (event.target as HTMLElement).hidden = true;
    this.chatService.startGame();
  }
}
