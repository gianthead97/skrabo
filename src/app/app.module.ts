import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { ChatComponent } from './chat/chat.component';
import { PlaygroundComponent } from './playground/playground.component';
import { GameInfoFormComponent } from './game-info-form/game-info-form.component';
// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { WordPickerComponent } from './word-picker/word-picker.component';
import { IsPlayingComponent } from './is-playing/is-playing.component';
import { GameOverComponent } from './game-over/game-over.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WhiteboardComponent,
    ChatComponent,
    PlaygroundComponent,
    GameInfoFormComponent,
    PlayerComponent,
    PlayerListComponent,
    WordPickerComponent,
    IsPlayingComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [GameInfoFormComponent]
})
export class AppModule { }
