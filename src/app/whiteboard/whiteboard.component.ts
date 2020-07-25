import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { CanvasService } from '../services/canvas.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit, OnDestroy {

  board: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active = false;
  htmlCanvas: HTMLElement;
  rectCanvas: ClientRect;
  penSize: number;
  penColor: string;
  subscriptions: Subscription[] = [];

  constructor(private canvasService: CanvasService) {
    this.subscriptions.push(this.canvasService
      .getCanvasEvent()
      .subscribe((data: string) => {
        const img = new Image();
        img.src = data;
        this.ctx.drawImage(img, 0, 0);
      }));
  }

   ngOnDestroy(): void {
        this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

  sendCanvasData() {
    this.canvasService.sendCanvasData(this.board.toDataURL());
  }

  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;
    this.htmlCanvas = document.getElementById('board');
    this.rectCanvas = this.htmlCanvas.getBoundingClientRect();
    this.board = (document.getElementById('board') as HTMLCanvasElement);
    this.ctx = this.board.getContext('2d');
    // Ovaj deo je zbog resizinga
    this.board.height = this.board.offsetHeight;
    this.board.width = this.board.offsetWidth;
    // ***********************


    this.board.addEventListener('mousedown', (evt) => {
      this.sendCanvasData();
      this.startDrawing(evt);
    });
    this.board.addEventListener('mouseup', (evt) => {
      this.sendCanvasData();
      this.endDrawing();
    });
    this.board.addEventListener('mousemove', (evt) => {
      this.sendCanvasData();
      this.draw(evt);
    });

  }



  startDrawing(e: MouseEvent): void {

    this.active = true;
    this.draw(e);


  }

  endDrawing(): void {

    this.active = false;
    this.ctx.beginPath();
  }

  draw(e: MouseEvent): void {

    console.warn("DRAW");
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
    this.sendCanvasData();
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


