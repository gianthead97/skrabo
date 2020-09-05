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
export class PlayerListComponent implements OnInit, OnChanges {
  players: Player[] = [{
    _points: 0,
    _name: this.chatService.username,
    _admin: this.chatService.adminPermission,
    _code: this.chatService.code,
    _profile: (this.chatService.adminPermission ? '../../assets/pandice/1.png' : ' ')
    }];
  constructor(private chatService: ChatService) {
  }

  ngOnChanges(): void {

  }
  ngOnInit(): void {
    this.chatService.getSocketService.socket.on(Constants.changeInRoom, () => {
      this.chatService.getPlayers().subscribe((data: Player[]) => {
        this.players = [];
        data.forEach(player => this.players.push(player));
        data.forEach(player => console.log(player));
      });
    });
  }
}
