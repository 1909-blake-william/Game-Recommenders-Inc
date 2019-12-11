import { Component, OnInit } from '@angular/core';
import { Videogame } from '../model/game.model';



@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.scss']
})

export class GameRegisterComponent implements OnInit {

  videoGame: Videogame;
  

constructor() { }

ngOnInit() { }

}

