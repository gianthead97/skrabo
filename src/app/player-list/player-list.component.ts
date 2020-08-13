import { Component, OnInit, OnChanges } from '@angular/core';
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
export class PlayerListComponent implements OnInit, OnChanges {
  players: Player[] = [];
  constructor(private chatService: ChatService) {
    this.chatService.getSocketService.socket.on(Constants.changeInRoom, () => {
      this.chatService.getPlayers().subscribe((data: Player[]) => {
        this.players = [];
        data.forEach(player => this.players.push(player));
      });
    });
  }

  ngOnChanges(): void {
  }
  ngOnInit(): void {
  }

}
