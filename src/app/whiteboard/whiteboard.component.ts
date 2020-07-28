import {Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { CanvasService } from '../services/canvas.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit, OnDestroy, AfterViewInit {
  

  @ViewChild('whiteboard', {static: false})
  board: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  active = false;
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
  ngAfterViewInit(): void {
    this.rectCanvas = this.board.nativeElement.getBoundingClientRect();
    this.ctx = this.board.nativeElement.getContext('2d');
    // Ovaj deo je zbog resizinga
    this.board.nativeElement.height = this.board.nativeElement.offsetHeight;
    this.board.nativeElement.width = this.board.nativeElement.offsetWidth;
    // ***********************


    this.board.nativeElement.addEventListener('mousedown', (evt) => {
      this.sendCanvasData();
      this.startDrawing(evt);
    });
    this.board.nativeElement.addEventListener('mouseup', (evt) => {
      this.sendCanvasData();
      this.endDrawing();
    });
    this.board.nativeElement.addEventListener('mousemove', (evt) => {
      this.sendCanvasData();
      this.draw(evt);
    });
  }



  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;
    
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  

  sendCanvasData() {
    this.canvasService.sendCanvasData(this.board.nativeElement.toDataURL());
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
    this.ctx.clearRect(0, 0, this.board.nativeElement.width, this.board.nativeElement.height);
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


