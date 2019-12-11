import { Component, OnInit } from '@angular/core';
import { GameRegistrationService } from '../services/game-registration.service';
import { VideoGameRegister } from '../model/gameRegister';
import { SlugConvertorPipe } from '../custom pipe/slug-converter';
import { Videogame } from '../model/game.model';



@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.scss']
})

export class GameRegisterComponent implements OnInit {
  videoGame: VideoGameRegister;

  // tslint:disable-next-line: no-bitwise
  //{{ videoGame.name | SlugConvertorPipe }}

constructor(
  private registerGame: GameRegistrationService,
) {
 }

ngOnInit() { }

}

