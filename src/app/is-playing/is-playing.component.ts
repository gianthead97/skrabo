import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-is-playing',
  templateUrl: './is-playing.component.html',
  styleUrls: ['./is-playing.component.css']
})
export class IsPlayingComponent implements OnInit {
  constructor(private chatService: ChatService) {
  }

  ngOnInit(): void {
  }

  isEmptyRoom() {
//    console.log(this.chatService.isEmptyRoom);
    return !(this.chatService.isEmptyRoom);
  }

  isUserTurn() {
    return this.chatService.userTurn;
  }

  hasStarted() {
//    console.log(this.chatService.hasStarted)
    return this.chatService.hasStarted;
  }

  isEmptyString() {
//    console.log(this.chatService.getPlayerDrawing);
    return (this.chatService.getPlayerDrawing.length);
  }

  getPlayerOnTurn() {
//    console.log(this.chatService.getPlayerDrawing);
    return this.chatService.getPlayerDrawing;
  }

  getCode() {
    return this.chatService.code;
  }

}
