import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  image;
  constructor(private httpService: HttpService, private router: Router,private auth: AuthService) {}
  title ;
  campaignData;
  data;
  allData;
  campaign;
  userId;
  startCampagins;
  campaigns;
  ngOnInit() {
    this.userId = this.auth.getID();
    this.getuserData();
    this.getAllprojects();
    // this.campaignImage();

  }

  getuserData() {
    this.httpService.getUserData().subscribe(dataCampaign => {
      this.data = dataCampaign;
      // this.title = this.campaignData.startCampaigns[0].title;
      // this.id = this.campaignData._id;
    });
  }

  getAllprojects() {
    this.httpService.getAllCampaigns().subscribe(dataCampaign => {
      this.allData = dataCampaign;
      // this.title=this.allData[0].title
    });
  }
  campaignImage() {
    this.httpService.getcampaignImage().subscribe(data => {
  this.image = data;
    })
  }
  campaignDetails(allData) {
    this.router.navigate(['campaignDetails/', allData]);

  }
  setId(userId) {
    localStorage.setItem("userId", JSON.stringify(userId));
  }
}
