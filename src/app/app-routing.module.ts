import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PlaygroundComponent } from './playground/playground.component';
import { GameOverComponent } from './game-over/game-over.component';


const routes: Routes = [
  { path: '', component:  FormComponent },
  { path: 'game', component: PlaygroundComponent },
  { path: 'end', component: GameOverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
