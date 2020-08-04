import { Component, OnInit, OnChanges } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { Player } from '../models/player.model';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnChanges {
  players: Observable<Player[]>;
  constructor(private chatService: ChatService) { 
  }

  ngOnChanges(): void {
    this.players = this.chatService.getPlayers();
  }
  ngOnInit(): void {
  }

}
