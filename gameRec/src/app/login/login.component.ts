import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  user = '';

  credentials = {
    username: '',
    password: ''
  };

  credentialsR = {
    username: '',
    password: ''
  };

  errorMessage = '';
  errorMessageRegist = '';
  errorMessageSubscription: Subscription;
  errorMessageRegistSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.errorMessageSubscription = this.authService.$loginError.subscribe((errorMessage: string) => {
      this.errorMessage = errorMessage;
    });
    this.errorMessageRegistSubscription = this.authService.$registerError.subscribe((errorMessageRegist: string) => {
      this.errorMessageRegist = errorMessageRegist;
    });
  }

  login() {
    this.authService.login(this.credentials);
  }

  register() {
    this.authService.register(this.credentialsR);
  }


  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }
}
