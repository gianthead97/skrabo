import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../services/canvas.service';
import { CanvasData } from '../models/canvasData.model';

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

  constructor(private canvasService: CanvasService) {
    this.canvasService
      .getCanvasEvent()
      .subscribe((data: CanvasData) => {
        
        if (typeof(data.event)  === 'string') {
          this.onClearCanvas();
        } else if (data.mouseMove == 'mousedown') {
          this.startDrawing(data.event);
        } else if (data.mouseMove == 'mousemove') {
          this.draw(data.event, data.penSize, data.penColor);
        } else {
          this.endDrawing();
        }
      });
  }

  sendCanvasData(mouseMove: string,evt: MouseEvent | string) {
    this.canvasService.sendCanvasData(new CanvasData(evt, this.penSize, this.penColor, mouseMove));
  }

  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;
    this.htmlCanvas = document.getElementById('board');
    this.rectCanvas = this.htmlCanvas.getBoundingClientRect();
    this.board = (document.getElementById('board') as HTMLCanvasElement);
    this.ctx = this.board.getContext('2d');
    this.ctx.scale(0.5, 0.31);
    this.board.addEventListener('mousedown', (evt) => {
      // console.log(evt);
      this.sendCanvasData('mousedown',evt);
      this.startDrawing(evt);
    });
    this.board.addEventListener('mouseup', (evt) => {
      // console.log(evt);
      this.sendCanvasData('mouseup',evt);
      this.endDrawing();
    });
    this.board.addEventListener('mousemove', (evt) => {
      // console.log(evt);
      this.sendCanvasData('mousemove', evt);
      this.draw(evt);
    });

  }



  startDrawing(e: MouseEvent): void {

    this.active = true;
    this.draw(e);

    // console.log('start drawing: active:' + this.active);

  }

  endDrawing(): void {

    this.active = false;
    this.ctx.beginPath();
    // console.log('end drawing: active:' + this.active);
  }

  draw(e: MouseEvent, penSize?: number, penColor?: string): void {

   

    if (!this.active) { return; }
    
    this.ctx.lineWidth = penSize || this.penSize;
    this.ctx.strokeStyle = penColor ||  this.penColor;
    this.ctx.lineCap = 'round';
    const X = e.clientX - this.rectCanvas.left; 
    const Y = e.clientY - this.rectCanvas.top;
    this.ctx.lineTo(X, Y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(X, Y);


  }


  onClearCanvas(): void {
    this.ctx.scale(1/0.5, 1/0.31);
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
    this.ctx.scale(0.5, 0.31);
    this.sendCanvasData('', 'clear');
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


