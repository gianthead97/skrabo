import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private chatService: ChatService) {
   this.getRoomName();
  }

  ngOnInit(): void {
  }
  getRoomName(): void {
    this.chatService.getRoomName().subscribe(name => console.info(name));
  }
}
