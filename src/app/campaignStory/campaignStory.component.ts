import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-campaignStory",
  templateUrl: "./campaignStory.component.html",
  styleUrls: ["./campaignStory.component.css"]
})
export class CampaignStoryComponent implements OnInit {
  campaign;
  details;
  image;
  storyId;
  constructor(private httpService: HttpService,public route: ActivatedRoute, ) {}
  ngOnInit() {
    // this.campaignData();
    const id = (this.route.snapshot.paramMap.get('id'));
    this.storyId = id;
  }


  uploadStory(id) {
    const newStory = {
      image: this.image,
      details: this.details,
      storyId: id
    };
    this.httpService.createStory(newStory).subscribe(newStory => {
      alert("Story Uploaded");
    });
  }
  //   campaignData() {
  //     this.httpService.getCampaign().subscribe(data => {
  //   this.campaign = data[0];
  //   this.details = this.campaign.campaignStories[0].details

  // });
  //   }
}
