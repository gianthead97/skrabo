import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Word } from '../models/word.model';

@Component({
  selector: 'app-word-picker',
  templateUrl: './word-picker.component.html',
  styleUrls: ['./word-picker.component.css']
})
export class WordPickerComponent implements OnInit {

  words = [];

  constructor(private chatService: ChatService) {
    this.pickFrom();
  }

  ngOnInit(): void {
  }

  wordChosen() {
    console.log(this.chatService.isUserTurn);
    this.chatService.isUserTurn = false;
  }

  pickFrom() {
    this.chatService.getWords().subscribe((data: Word[]) => {
      data.forEach(word => this.words.push(word.word));
    });
  }

}
