import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public prikaziInfo: boolean;
  public prikaziPravila: boolean;

  constructor() { 
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
}
