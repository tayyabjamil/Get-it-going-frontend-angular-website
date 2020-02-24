import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  campaignimageData: Object;

  constructor(private httpService: HttpService,private router: Router) { }
title = "name";
campaignData ;
  ngOnInit() {
    this.getCampaign();
this.campaignImage();
  }

  getCampaign() {
    this.httpService.getCampaign().subscribe(data => {
  this.campaignData = data;
    })
}
campaignImage() {
  this.httpService.getcampaignImage().subscribe(data => {
this.campaignimageData = data;
  })
}
campaignDetails(){

  this.router.navigate(['campaignDetails']);

}
}
