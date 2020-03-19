import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  campaignimageData: Object;

  constructor(private httpService: HttpService, private router: Router) {}
  title ;
  campaignData;
  data;
  allData;
  campaign;
  id;
  startCampagins;
  campaigns;
  ngOnInit() {
    this.getuserData();
    this.getAllprojects();
  }

  getuserData() {
    this.httpService.getUserData().subscribe(dataCampaign => {
      this.campaignData = dataCampaign;
      this.campaigns = this.campaignData.startCampaigns;
      // this.title = this.campaignData.startCampaigns[0].title;
      // this.id = this.campaignData._id;
    });
  }

  getAllprojects() {
    this.httpService.getAllCampaigns().subscribe((dataCampaign: any) => {
      this.allData = dataCampaign.campaign;
      // this.title=this.allData[0].title
    });
  }
  // campaignImage() {
  //   this.httpService.getcampaignImage().subscribe(data => {
  // this.campaignimageData = data;
  //   })
  // }
  campaignDetails(allData) {
    this.router.navigate(['campaignDetails/', allData]);
    // this.setId(this.allData._Id);
  }
  setId(userId) {
    localStorage.setItem("userId", JSON.stringify(userId));
  }
}
