import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  {path:'', component: MainMenuComponent},
  {path:'game', component:ContainerComponent},
  {path:'scores', component:ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
