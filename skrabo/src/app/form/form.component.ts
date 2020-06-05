import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public prikaziInfo: boolean;
  public prikaziPravila: boolean;

  constructor(private chatService: ChatService) {
    this.prikaziInfo = false;
    this.prikaziPravila = false;
  }

  ngOnInit(): void {
  }

  public onPrikaziInfo(): void {
    this.prikaziInfo = !this.prikaziInfo;
  }
  public onPrikaziPravila(): void {
    this.prikaziPravila = !this.prikaziPravila;
  }

  public onUnosImena(username: string) {
    this.chatService.setUsername(username);
  }
}
