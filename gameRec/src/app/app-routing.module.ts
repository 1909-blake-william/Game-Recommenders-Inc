import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { GameRecommenderComponent } from './game-recommender/game-recommender.component';
import { GameOwnedComponent } from './game-owned/game-owned.component';
import { GameLikedComponent } from './game-liked/game-liked.component';
import { GameCardComponent } from './game-card/game-card.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'game-card',
    component: GameCardComponent
  },
  {
    path: 'regist',
    component: GameRegisterComponent
  },
  {
    path: 'recom',
    component: GameRecommenderComponent
  },
  {
    path: 'owned',
    component: GameOwnedComponent
  },
  {
    path: 'liked',
    component: GameLikedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
