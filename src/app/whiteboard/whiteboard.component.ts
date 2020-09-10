import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CanvasService } from '../services/canvas.service';
import { Subscription } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit, OnDestroy {
  board: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active = false;
  rectCanvas: ClientRect;
  penSize: number;
  penColor: string;
  subscriptions: Subscription[] = [];

  constructor(private canvasService: CanvasService, private chatService: ChatService) {

    this.subscriptions.push(
      this.canvasService
        .getCanvasEvent()
        .subscribe((data: string) => {
          const img = new Image();
          img.src = data;
          this.ctx.drawImage(img, 0, 0);
        }));
  }
  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;
    this.board = (document.getElementById('board') as HTMLCanvasElement);
    this.rectCanvas = this.board.getBoundingClientRect();
    this.ctx = this.board.getContext('2d');
    // Ovaj deo je zbog resizinga
    this.board.height = this.board.offsetHeight;
    this.board.width = this.board.offsetWidth;
    // ***********************
    // this.canvasService.setTogglingCanvas(this.board, this.initalizeMousesListeners.bind(this), this.deinitializeMouseListeners.bind(this));
    if (this.chatService.userTurn) {
      this.initalizeMousesListeners();
    }
  }

  public initalizeMousesListeners() {
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


  /**
   * This is a hack, source: https://techoverflow.net/2019/12/26/how-to-remove-all-event-listeners-from-a-dom-element-in-javascript/
   */
  public deinitializeMouseListeners(): void {
    this.board.replaceWith(this.board.cloneNode(true));
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }



  sendCanvasData() {
    this.canvasService.sendCanvasData(this.board.toDataURL());
  }




  startDrawing(e: MouseEvent): void {

    this.active = true;
    this.ctx.beginPath()
    this.draw(e);


  }

  endDrawing(): void {

    this.active = false;
    this.ctx.closePath();
    //this.ctx.beginPath();
  }

  draw(e: MouseEvent): void {

    if (!this.active) { return; }

    this.ctx.lineWidth = this.penSize;
    this.ctx.strokeStyle = this.penColor;
    this.ctx.lineCap = 'round';
    this.ctx.lineTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);
    this.ctx.stroke();
    //this.ctx.beginPath();
    this.ctx.moveTo(e.clientX - this.rectCanvas.left, e.clientY - this.rectCanvas.top);

  }


  onClearCanvas(): void {
    if (!this.canvasService.getUserTurn()) { return; }
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


