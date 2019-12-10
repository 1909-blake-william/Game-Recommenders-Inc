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

  errorMessage = '';
  errorMessageSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.errorMessageSubscription = this.authService.$loginError.subscribe((errorMessage: string) => {
      this.errorMessage = errorMessage;
    });
  }

  login() {
    this.authService.login(this.credentials);
  }

  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }
}
