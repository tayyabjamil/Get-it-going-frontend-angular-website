import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  confirmPassword;
  accountData;

  ngOnInit() {}
  constructor(private httpService: HttpService, private router: Router) {}

  login() {
    const userAccount = {
      email: this.email,
      password: this.password
    };
    this.httpService.login(userAccount).subscribe((res: any) => {
      this.router.navigate(['home']);
      alert('login succesfully');
      this.setToken(res.token);
      this.setId(res.userId);
    });
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  setId(userId) {
    localStorage.setItem('userId', JSON.stringify(userId));
  }
}
