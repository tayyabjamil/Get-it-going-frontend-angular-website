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

createuserAccount(newUser) {
  return this.http.post('http://localhost:3000/userAccount',
      {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
       },  this.httpHeaders);
  }

   login(user) {
    return this.http.post( 'http://localhost:3000/userAccount/login',
     {
      email: user.email ,
      password: user.password,
     }, this.httpHeaders);
   }

   getCampaign() {
  return this.http.get('http://localhost:3000/startCampaign');

}
getcampaignImage() {
  return this.http.get('http://localhost:3000/campaignImage');

}


startCampaign(campaignData) {
  return this.http.post('http://localhost:3000/startCampaign',
      {
        title: campaignData.title,
        tagline: campaignData.tagline,
        amount: campaignData.amount,
       description: campaignData.description
      },  this.httpHeaders);
  }
campaignImage(formData){
  return this.http.post('http://localhost:3000/campaignImage', formData)
  }
  campaignVedio(formData){
    return this.http.post('http://localhost:3000/campaignVedio', formData)
    }

  }

