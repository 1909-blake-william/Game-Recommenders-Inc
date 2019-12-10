import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VideoGameRegister } from '../model/gameRegister.model';
import { Videogame, ApiResponse } from '../model/game.model';


@Injectable()


export class RegisterService {
    videoGame: Videogame;
    constructor(private httpClient: HttpClient, private router: Router) {
        this.httpClient.get<ApiResponse[]>(`https://api.rawg.io/api/games?name=${Object.keys(VideoGameRegister[0])}`, {
            withCredentials: true
        }).subscribe(
            data => {
                if (data) {
                    for (const r of data){
                        if (r && r.id) {
                            this.videoGame.id = r.id;
                        }
                        if (r && r.genre && r.genre.length) {
                            this.videoGame.genreid = r.genre[0].id;
                            this.videoGame.genrename = r.genre[0].name;
                        }
                    }
                    console.log(data);
                }
                this.httpClient.post<Videogame>()
                // let r;
                // this.result = data;
                // for (r of this.result) {
                //     if (r && r.id) {
                //         this.videoGame.id = r.id;
                //     }
                //     if (r && r.name) {
                //         this.videoGame.name = r.name;
                //     }
                //     if (r && r.id) {
                //         this.videoGame.id = r.id;
                //     }
                //     if (r && r.id) {
                //         this.videoGame.id = r.id;
                //     }

                // }
                // this.videoGame.name = data.name;

                // this.httpClient.post<data>('http://localhost:8080/GameRecommender/gri/register-game')
            }
        )
        
    }
}