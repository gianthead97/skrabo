import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../models/player.model';
import { ChatService } from '../services/chat.service';
import { Observable, Subscription } from 'rxjs';
import * as Constants from '../../../const.js';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnChanges, OnDestroy {
  players: Player[] = [{
    _points: 0,
    _name: this.chatService.username,
    _admin: this.chatService.adminPermission,
    _code: this.chatService.code,
    _profile: (this.chatService.adminPermission ? '../../assets/pandice/1.png' : ' ')
  }];
  private subscriptions: Subscription[] = [];

  constructor(private chatService: ChatService) {
  }

  ngOnChanges(): void {

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.chatService.getSocketService.socket.on(Constants.changeInRoom, () => {
      this.subscriptions.push(
        this.chatService.getPlayers().subscribe((data: Player[]) => {
          this.players = [];
          data.forEach(player => this.players.push(player));
          data.forEach(player => console.log(player));
          this.chatService.isEmptyRoom = data.length;
        }));
    });
  }
}
