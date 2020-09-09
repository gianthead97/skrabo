import { Component, OnInit } from '@angular/core';

import { ChatService } from '../services/chat.service';
import { Constants } from '../../../const';
import { Observable, of } from 'rxjs';
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
  timestamp = '';
  public canvas = false;

  constructor(private chatService: ChatService) {
    this.roomName = this.getRoomName();
    this.chatService.listenToMyTurn();
    this.chatService
      .getWord()
      .subscribe(({ word }) => {
        this.word = word.split('');
      });
  }

  ngOnInit(): void {
    this.chatService.turnStarted().subscribe(() => {
      this.canvas = true;
    });

    this.chatService.turnFinished().subscribe(() => {
      this.canvas = true;
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

  isCanvas(): boolean {
    return !(this.chatService.isCanvas);
  }

  isCreator(): boolean {
    return this.chatService.adminPermission;
  }

  onStartGame(event: Event): void {
    (event.target as HTMLElement).hidden = true;
    this.chatService.startGame();
  }

  getTimestamp() {
    // console.log(this.chatService.turnTimestamp);
    return this.chatService.turnTimestamp;
  }
}
