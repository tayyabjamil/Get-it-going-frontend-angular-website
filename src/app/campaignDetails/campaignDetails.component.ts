import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-campaignDetails',
  templateUrl: './campaignDetails.component.html',
  styleUrls: ['./campaignDetails.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  images;
  stories;
  updates;
  vedio;
  backers;
  paramsid;
  title;
  tagline;
  description;
  amount;
campaign;
data;
  constructor(private httpService: HttpService , public route: ActivatedRoute) {}

  ngOnInit() {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.paramsid = id;
    this.getCampaignDetails();
    // tslint:disable-next-line: radix

  }

  getCampaignDetails() {
    this.httpService.getCampaignDetails(this.paramsid).subscribe(res => {

      this.data = res;
      // this.tagline = data.campaign.tagline;
      // this.description = data.campaign.description;
      // this.images  =  data.campaign.campaignImages;
      // this.updates = data.campaign.campaignUpdates;
      // this.stories = data.campaign.campaignStories;
      // this.vedio   = data.campaign.campaignVedios;
      // this.backers  = data.campaign.campaignBackers;
    });
  }
}
