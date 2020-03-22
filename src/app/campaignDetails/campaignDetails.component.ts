import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-campaignDetails',
  templateUrl: './campaignDetails.component.html',
  styleUrls: ['./campaignDetails.component.css']
})
export class CampaignDetailsComponent implements OnInit {
  title;
  images;
  stories;
  updates;
  vedio;
  backers;
  paramsid;

  tagline;
  description;
  amount;
  doc;
// tslint:disable-next-line: ban-types
campaign: String ;
data;
  constructor(private httpService: HttpService , public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.paramsid = id;
    this.getCampaignDetails();

  }

  getCampaignDetails() {
    this.httpService.getCampaignDetails(this.paramsid).subscribe(res => {

      this.doc = res;
      this.data = this.doc.doc ;
      // this.tagline = data.campaign.tagline;
      // this.description = data.campaign.description;
      // this.images  =  data.campaign.campaignImages;
      // this.updates = data.campaign.campaignUpdates;
      // this.stories = data.campaign.campaignStories;
      // this.vedio   = data.campaign.campaignVedios;
      // this.backers  = data.campaign.campaignBackers;
    });
  }

  uploadStory() {
    this.router.navigate(['campaignStory/', this.paramsid]);
  }
  uploadReview() {
    this.router.navigate(['campaignReview/', this.paramsid]);
  }

}
