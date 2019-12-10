import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { GameRecommenderComponent } from './game-recommender/game-recommender.component';
import { MainComponent } from './main/main.component';
import { GameOwnedComponent } from './game-owned/game-owned.component';
import { GameInfoComponent } from './game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameRegisterComponent,
    GameRecommenderComponent,
    MainComponent,
    GameOwnedComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
