import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PlaygroundComponent } from './playground/playground.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'game', component: PlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
