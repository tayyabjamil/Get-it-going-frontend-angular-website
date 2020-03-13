import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-campaignStory',
  templateUrl: './campaignStory.component.html',
  styleUrls: ['./campaignStory.component.css']
})
export class CampaignStoryComponent implements OnInit {
campaign;
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    // this.campaignData();
      }
details;
image;
uploadStory() {
  const newStory = {
    image: this.image,
    details : this.details
  }
  this.httpService.createStory(newStory).subscribe(newStory => {
  alert('Story Uploaded');
  });
}
    //   campaignData() {
    //     this.httpService.getCampaign().subscribe(data => {
    //   this.campaign = data[0];
    //   this.details = this.campaign.campaignStories[0].details

    // });
    //   }
    }

