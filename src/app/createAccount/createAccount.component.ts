import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

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
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  createAccount() {
    const newAccount = {
      username : this.username,
      email : this.email,
      password : this.password
    }
    this.httpService.createuserAccount(newAccount).subscribe(newAccount => {
    alert('account created');
    });
  }

}
