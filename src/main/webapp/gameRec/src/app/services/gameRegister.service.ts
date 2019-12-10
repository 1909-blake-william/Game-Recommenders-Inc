import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VideoGameRegister } from '../model/gameRegister.model';
import { Videogame } from '../model/game.model';

@Injectable()


export class RegisterService{
    videoGame: Videogame;

    constructor(private httpClient: HttpClient, private router: Router){
        this.httpClient.get<VideoGameRegister>(`https://api.rawg.io/api/games?name=${Object.keys(VideoGameRegister[0])}`, {
            withCredentials: true
        }).subscribe(
            data=> {
                
                this.httpClient.post<data>('http://localhost:8080/GameRecommender/gri/register-game')
            }
        )
        
    }
}