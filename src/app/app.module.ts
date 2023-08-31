import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { GridComponent } from './grid/grid.component';
import { ContainerComponent } from './container/container.component';
import { ClickService } from './services.ts/clickService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WinnerDialogComponent } from './winner-dialog/winner-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ScoreService } from './services.ts/scoreService';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ScoresComponent } from './scores/scores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NameExistsDialogComponent } from './name-exists-dialog/name-exists-dialog.component';
import { InstructionsComponent } from './instructions/instructions.component';
@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GridComponent,
    ContainerComponent,
    WinnerDialogComponent,
    MainMenuComponent,
    ScoresComponent,
    NameExistsDialogComponent,
    InstructionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ClickService, ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
