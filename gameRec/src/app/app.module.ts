import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { GameRecommenderComponent } from './game-recommender/game-recommender.component';
import { MainComponent } from './main/main.component';
import { GameOwnedComponent } from './game-owned/game-owned.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameLikedComponent } from './game-liked/game-liked.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameRegisterComponent,
    GameRecommenderComponent,
    MainComponent,
    GameOwnedComponent,
    GameInfoComponent,
    UserRegistrationComponent,
    GameCardComponent,
    GameLikedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
