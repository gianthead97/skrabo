import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-is-playing',
  templateUrl: './is-playing.component.html',
  styleUrls: ['./is-playing.component.css']
})
export class IsPlayingComponent implements OnInit {
  public playerOnTurn = '';

  constructor(private chatService: ChatService) {
    console.log(this.chatService.getPlayerDrawing);
    this.playerOnTurn = this.chatService.getPlayerDrawing;
  }

  ngOnInit(): void {
  }

  isEmptyRoom() {
    console.log(this.chatService.isEmptyRoom);
    return !(this.chatService.isEmptyRoom);
  }

  isUserTurn() {
    return this.chatService.userTurn;
  }

  hasStarted() {
    return this.chatService.isStarted;
  }

}
