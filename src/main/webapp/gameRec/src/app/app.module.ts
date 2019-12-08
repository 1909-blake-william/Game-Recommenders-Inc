import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GameRegisterComponent } from './game-register/game-register.component';
import { GameRecommenderComponent } from './game-recommender/game-recommender.component';
import { MainComponent } from './main/main.component';
import { GameOwnedComponent } from './game-owned/game-owned.component';
import { MenubarComponent } from './menubar/menubar.component';
import { GameInfoComponent } from './game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameRegisterComponent,
    GameRecommenderComponent,
    MainComponent,
    GameOwnedComponent,
    MenubarComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
