import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../models/player.model';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import * as Constants from '../../../const.js';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnChanges, AfterViewChecked {
  players: Player[] = [];
  constructor(private chatService: ChatService) {

  }

  ngOnChanges(): void {
  }
  ngOnInit(): void {
    this.chatService.getSocketService.socket.on(Constants.changeInRoom, () => {
      this.chatService.getPlayers().subscribe((data: Player[]) => {
        this.players = [];
        data.forEach(player => this.players.push(player));
      });
    });
  }
  ngAfterViewChecked(): void {
    this.chatService.getPlayers().subscribe((data: Player[]) => {
      this.players = [];
      data.forEach(player => this.players.push(player));
    });
  }

}
