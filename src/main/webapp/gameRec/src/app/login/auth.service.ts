import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // not so sure whats going on in here.

  private currentUserStream = new ReplaySubject<User>(1);
  $currentUser = this.currentUserStream.asObservable();

  private loginErrorStream = new Subject<string>();
  $loginError = this.loginErrorStream.asObservable();


  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<User>('http://localhost:8080/gri/session-user', {
      withCredentials: true
    }).subscribe(
      data => {
        console.log('logged in');
        console.log(data);
        this.currentUserStream.next(data);
      },
      err => {
        console.log('not currently logged in');
      }
    );
  }

  login(credentials) {
    this.httpClient.post<User>('http://localhost:8080/gri/login', credentials, {
      withCredentials: true
    }).subscribe(
      data => {
        console.log('logged in');
        this.router.navigateByUrl('/main');
        this.currentUserStream.next(data);
      },
      err => {
        console.log(err);
        this.loginErrorStream.next('Login Failed');
      }
    );
  }
}
