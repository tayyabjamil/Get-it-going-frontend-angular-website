import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-createAccount',
  templateUrl: './createAccount.component.html',
  styleUrls: ['./createAccount.component.css']
})
export class CreateAccountComponent implements OnInit {
username;
email;
password;
newAccount;
token;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  createAccount() {
    const newAccount = {
      username : this.username,
      email : this.email,
      password : this.password
    };
    // tslint:disable-next-line: no-unused-expression
    this.httpService.createuserAccount(newAccount) .subscribe((res: any) => {
      // this.setToken(res.token);
      alert('account created');
    });
  }

  setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getToken() {
   return JSON.parse(localStorage.get('token'));
  }

}
