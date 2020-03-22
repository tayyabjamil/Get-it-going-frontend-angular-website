import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { AuthService } from '../auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startCampaign',
  templateUrl: './startCampaign.component.html',
  styleUrls: ['./startCampaign.component.css']
})
export class StartCampaignComponent implements OnInit {
  userid: any;
  id: any;

  constructor(private httpService: HttpService, private auth: AuthService,private router:Router) { }
  title: any;
  type: any;
  estimateAmount: any;
  description: any;
  projectData: any;
  tagline: string;
  amount: string;
  vediourl: string;
  pledgeAmount: string;
  rewardImage: string;
  campaignImage: string;
  campaignData;
  images;
  imagePath;
  rewardDetails;
  mainImage;
  userId;
  ngOnInit() {

     this.userId = this.auth.getID();
  }

  startCampaign() {
    const campaignData = {
    title : this.title,
    tagline : this.tagline,
    amount: this.amount,
    description: this.description,
    pledgeAmount: this.pledgeAmount,
    rewardDetails: this.rewardDetails,
    userAccountId: this.userId,
    mainImage: this.images.name,
    };

    this.httpService.startCampaign(campaignData).subscribe( campaignData => {
      alert('Campaign posted');
      this.router.navigate(['/home']);
  });
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.images = file;
    }
}
selectMultipleImage(event) {
  if (event.target.files.length > 0) {
  const file = event.target.files;
  this.images = file;
  }
}
selectVedio(event) {
  if (event.target.files.length > 0) {
  const file = event.target.files[0];
  this.vediourl = file;
  }
}
uploadimgFile() {
  const formData = new FormData();
  formData.append('mainImage', this.images);
  this.httpService.campaignImage(formData).subscribe( formData => {
    console.log(formData);
    alert('img uploaded');
  }
    );
}
uploadvedioFile() {
  const formData = new FormData();
  formData.append('campaignVedio', this.vediourl);
  this.httpService.campaignVedio(formData).subscribe( formData => {
    console.log(formData);
    alert('vedio uploaded');
  });
}
}


