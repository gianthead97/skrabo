import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {


  board: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active = false;
  htmlCanvas: HTMLElement;
  rectCanvas: ClientRect;
  penSize: number;
  penColor: string;

  constructor() {


  }

  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;
    this.htmlCanvas = document.getElementById('board');
    this.rectCanvas = this.htmlCanvas.getBoundingClientRect();
    this.board = (document.getElementById('board') as HTMLCanvasElement);
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

    console.log('start drawing: active:' + this.active);

  }

  endDrawing(): void {

    this.active = false;
    this.ctx.beginPath();
    console.log('end drawing: active:' + this.active);
  }

  draw(e: MouseEvent): void {

    console.log('drawing...' + this.rectCanvas.left + this.rectCanvas.top);

    if (!this.active) { return; }

    this.ctx.lineWidth = this.penSize;
    this.ctx.strokeStyle = this.penColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);

  }


  onClearCanvas(): void {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
  }

  onPenSmall(): void {
    this.penSize = 5;
  }

  onPenMidSmall(): void {
    this.penSize = 10;
  }
  onPenMidBig(): void {
    this.penSize = 20;
  }
  onPenBig(): void {
    this.penSize = 35;
  }

  public setColor() {

    return { background: this.penColor };


  }



}


