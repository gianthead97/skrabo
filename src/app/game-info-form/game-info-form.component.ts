import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ChatService} from '../services/chat.service';

@Component({
  selector: 'app-game-info-form',
  templateUrl: './game-info-form.component.html',
  styleUrls: ['./game-info-form.component.css']
})
export class GameInfoFormComponent implements OnInit {
  public gameInfoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private chatService: ChatService) {
    this.gameInfoForm = this.formBuilder.group({
      duration: [''],
      rounds: [''],
      language: ['', [Validators.required]]
    });
    this.gameInfoForm.patchValue({
      duration: "30",
      rounds: "2",
      language: "srpski"
    });
  }


  ngOnInit(): void {
  }


  public submitForm(data): void {
    
    this.chatService.sendRules(data);
  }

}
