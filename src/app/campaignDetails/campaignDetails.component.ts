import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-campaignDetails',
  templateUrl: './campaignDetails.component.html',
  styleUrls: ['./campaignDetails.component.css']
})
export class CampaignDetailsComponent implements OnInit {
campaign;
images;
stories;
updates;
vedio;
backers;
constructor(private httpService: HttpService) { }

  ngOnInit() {
this.campaignData();
  }

  campaignData() {
    this.httpService.getCampaign().subscribe(data => {
  this.campaign = data[0];
  this.images  =  this.campaign.campaignImages;
  this.updates = this.campaign.campaignUpdates;
  this.stories = this.campaign.campaignStories;
  this.vedio   = this.campaign.campaignVedios;
  this.backers  = this.campaign.campaignBackers;
});
  }
}
