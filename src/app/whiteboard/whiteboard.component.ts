import { Component, OnInit } from '@angular/core';
import { CanvasService } from '../services/canvas.service';
import { CanvasData } from '../models/canvasData.model';
const Atrament = require('atrament');

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {

  board: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  active = false;
  atrament;
  penSize: number;
  penColor: string;

  constructor(private canvasService: CanvasService) {
    this.canvasService
        .getCanvasEvent()
        .subscribe((data) => this.drawOthersData(data));
  }


  drawOthersData(stroke): void {
    //This piece of code is taken from 
    //https://github.com/jakubfiala/atrament.js
    this.atrament.mode = stroke.mode;
    this.atrament.weight = stroke.weight;
    this.atrament.smoothing = stroke.smoothing;
    this.atrament.color = stroke.color;
    this.atrament.adaptiveStroke = stroke.adaptiveStroke;

    // don't want to modify original data
    const points = stroke.points.slice();

    const firstPoint = points.shift();
    // // beginStroke moves the "pen" to the given position and starts the path
    this.atrament.beginStroke(firstPoint.x, firstPoint.y);

    let prevPoint = firstPoint;
    while (points.length > 0) {
      const point = points.shift();

    //   // the `draw` method accepts the current real coordinates
    //   // (i. e. actual cursor position), and the previous processed (filtered)
    //   // position. It returns an object with the current processed position.
      const { x, y } = this.atrament.draw(point.x, point.y, prevPoint.x, prevPoint.y);

    //   // the processed position is the one where the line is actually drawn to
    //   // so we have to store it and pass it to `draw` in the next step
      prevPoint = { x, y };
    }

    // // endStroke closes the path
    this.atrament.endStroke(prevPoint.x, prevPoint.y);
  }

  sendCanvasData(stroke) {
    this.canvasService.sendCanvasData(stroke);
  }

  ngOnInit(): void {
    this.penColor = 'black';
    this.penSize = 5;

    this.board = (document.getElementById('board') as HTMLCanvasElement);
    this.ctx = this.board.getContext('2d');
    this.atrament = new Atrament(this.board, {
      width: this.board.offsetWidth,
      height: this.board.offsetHeight,
      smoothing: 1.5,
      adaptiveStroke: false
    });
    this.atrament.recordStrokes = true;
    this.atrament.addEventListener('strokerecorded', ({ stroke }) => {
                    this.sendCanvasData(stroke);
                  });
    window.onresize = () => {
      this.atrament.height = this.board.offsetHeight; 
      this.atrament.width = this.board.offsetWidth;
      console.log(this.atrament.width, this.atrament.height);
    };

  }





  startDrawing(e: MouseEvent): void {}

  endDrawing(): void {

  }

  draw(e: MouseEvent, penSize?: number, penColor?: string){

  }


  onClearCanvas(): void {
    this.atrament.clear();
  }

  onPenSmall(): void {
    this.atrament.weight = 5;
  }

  onPenMidSmall(): void {
    this.atrament.weight = 10;
  }
  onPenMidBig(): void {
    this.atrament.weight = 20;
  }
  onPenBig(): void {
    this.atrament.weight= 35;
  }

  public setColor() {
    this.atrament.color = this.penColor;
    return { background: this.penColor };
  }



}


