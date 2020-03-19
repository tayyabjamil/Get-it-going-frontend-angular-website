import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private httpService: HttpService,private router: Router) { }

productData;

  campaignData;
campaigns;
  ngOnInit() {
this.getUserData();
  }
  post(){
    this.router.navigate(['campaignDetails']);
    }
    back(){
      this.router.navigate(['myProjects']);

    }
  getUserData(){
      this.httpService.getUserData().subscribe(dataCampaign => {

        this.campaignData = dataCampaign;

      });
    }

}
