import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Word } from '../models/word.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  message: string;
  data = {
    messages: [],
    colors: []
  };
  input: HTMLElement;
  private subscriptions: Subscription[] = [];

  constructor(private chatService: ChatService) {
    this.subscriptions
      .push(
        this.chatService
          .getMessages()
          .subscribe(({ message, color }) => {
            this.data.messages.push(message);
            this.data.colors.push(color);
          })
      );

    this.subscriptions
      .push(
        this.chatService
          .getSound()
          .subscribe(() => {
            const audio = new Audio(
              '../../assets/accomplished.mp3');
            audio.play();
          })
      );
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(): void {
    // setup for sending text by Enter
    this.input = document.getElementById('text');
    this.input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('send').click();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
