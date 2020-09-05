import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Word } from '../models/word.model'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {

  message: string;
  data = {
    messages: [],
    colors: []
  };
  input: HTMLElement;

  constructor(private chatService: ChatService) {
    this.chatService
      .getMessages()
      .subscribe(({ message, color }) => {
        this.data.messages.push(message);
        this.data.colors.push(color);
      });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    // this.chatService.getWords().subscribe((data: Word[]) => {
    //   data.forEach(word => console.log(word.word));
    // });
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

}
