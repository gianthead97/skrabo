import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {


  board: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active: boolean = false;

  constructor() {


  }

  ngOnInit(): void {

    this.board = <HTMLCanvasElement>document.getElementById('board');
    this.ctx = this.board.getContext('2d');
    this.board.addEventListener('mousedown', (evt) => {
      // console.log(evt);
      this.startDrawing(evt);
    });
    this.board.addEventListener('mouseup', (evt) => {
      // console.log(evt);
      this.endDrawing();
    });
    this.board.addEventListener('mousemove', (evt) => {
      // console.log(evt);
      this.draw(evt);
    });

  }


  startDrawing(e: MouseEvent): void {

    this.active = true;
    this.draw(e);

    console.log("start drawing: active:" + this.active);

  }

  endDrawing(): void {

    this.active = false;
    this.ctx.beginPath();
    console.log("end drawing: active:" + this.active);
  }

  draw(e: MouseEvent): void {

    console.log("drawing...");

    if (!this.active) { return; }

    this.ctx.lineWidth = 10;
    //this.ctx.strokeStyle = 'black';
    this.ctx.lineCap = "round";
    this.ctx.lineTo(e.clientX, e.clientY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX, e.clientY);

  }



}
