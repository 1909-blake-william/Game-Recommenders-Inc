import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { GameRecommenderComponent } from './game-recommender/game-recommender.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameRegisterComponent,
    GameRecommenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
