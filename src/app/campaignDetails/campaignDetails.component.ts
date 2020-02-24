import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-campaignDetails',
  templateUrl: './campaignDetails.component.html',
  styleUrls: ['./campaignDetails.component.css']
})
export class CampaignDetailsComponent implements OnInit {
campaignimageData;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
this.campaignImage();
  }

  campaignImage() {
    this.httpService.getcampaignImage().subscribe(data => {
  this.campaignimageData = data;
    });
  }
}
