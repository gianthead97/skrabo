import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  message: string;
  messages: string[] = [];
  input: HTMLElement;
  textarea: HTMLElement;
  chatArea = '';

  constructor(private chatService: ChatService) {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
        this.chatArea += ('\n' + message);
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }

  ngOnInit(): void {
    // setup for sending text by Enter
    this.input = document.getElementById('text');
    console.log(this.input);
    this.input.addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('send').click();
      }
    });

    this.textarea = document.getElementById('chat');
  }

}
