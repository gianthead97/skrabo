import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit, OnDestroy {
  
  name: string;
  points: string;
  sub: Subscription;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.sub = route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.points = params.get('points');
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  
}
