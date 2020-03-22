import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'Application/Json',
      accept: ' application/json'
    })
  };

  getUserData() {
    return this.http.get('http://localhost:3000/startCampaign/' + this.authService.getID(),this.httpHeaders);

  }
  getAllCampaigns() {
    return this.http.get('http://localhost:3000/startCampaign/');
  }

  getCampaignDetails(id) {
    return this.http.get('http://localhost:3000/startCampaign/' + id,   this.httpHeaders);
  }

  startCampaign(campaignData) {
    return this.http.post(
      'http://localhost:3000/startCampaign'  ,
      {
        title: campaignData.title,
        tagline: campaignData.tagline,
        amount: campaignData.amount,
        description: campaignData.description,
        pledgeAmount: campaignData.pledgeAmount,
        rewardDetails: campaignData.rewardDetails,
        userAccountId: campaignData.userAccountId,
        mainImage: campaignData.mainImage,
        // rewardImage: campaignData.rewardImage
      },
      this.httpHeaders
    );
  }
  createuserAccount(newUser) {
    return this.http.post(
      'http://localhost:3000/userAccount/createAccount',
      {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      },
      this.httpHeaders
    );
  }

  login(user) {
    return this.http.post(
      'http://localhost:3000/userAccount/login',
      {
        email: user.email,
        password: user.password
      },
      this.httpHeaders
    );
  }


  getcampaignImage() {
    return this.http.get('http://localhost:3000/campaignImage');
  }


  createReview(reviewData) {
    return this.http.post(
      'http://localhost:3000/startCampaign/' + reviewData.reviewId + '/campaignReview',
      {
        name: reviewData.name,
        details: reviewData.details
      },
      this.httpHeaders
    );
  }
  createStory(storyData) {
    return this.http.post(
      'http://localhost:3000/startCampaign/' + storyData.storyId + '/campaignStory',
      {
        image: storyData.image,
        details: storyData.details
      },
      this.httpHeaders
    );
  }
  campaignImage(formData) {
    return this.http.post('http://localhost:3000/campaignImage/upload', formData);
  }
  campaignVedio(formData) {
    return this.http.post('http://localhost:3000/campaignVedio', formData);
  }
}
