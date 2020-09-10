import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Word } from '../models/word.model';
import { CanvasService } from '../services/canvas.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-word-picker',
  templateUrl: './word-picker.component.html',
  styleUrls: ['./word-picker.component.css']
})
export class WordPickerComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  words = [];

  constructor(private chatService: ChatService, private canvasService: CanvasService) {
    this.pickFrom();
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  wordChosen(index) {
    this.chatService.isUserTurn = false;
    this.chatService.sendWord(this.words[index]);
  }

  pickFrom() {
    this.subscriptions.push(
      this.chatService.getWords().subscribe((data: Word[]) => {
        data.forEach(word => this.words.push(word.word));
      })
    );
  }
}
