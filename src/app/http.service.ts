import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }
httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/Json',
    accept: ' application/json'
  })
}
createAccount(accountData){
  return this.http.post('http://localhost:3000/project',
  {
    username: accountData.username,
    email: accountData.email,
    password: accountData.password,
  },  this.httpHeaders);
}

startProject(projectData){
  return this.http.post('http://localhost:3000/project',
  {
    title: projectData.title,
    type: projectData.type,
    estimateAmount: projectData.estimateAmount,
    description: projectData.description
  },  this.httpHeaders);
}
createuserAccount(newUser) {
  return this.http.post('http://localhost:3000/userAccount',
      {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
       },  this.httpHeaders);
  }

getProject(){

  return this.http.get('http://localhost:3000/project');

   }
   login(user) {
    return this.http.post( 'http://localhost:3000/userAccount/login',
     {
      email: user.email ,
      password: user.password,
     }, this.httpHeaders);
   }
  }
