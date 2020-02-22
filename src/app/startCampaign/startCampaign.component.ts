import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-startCampaign',
  templateUrl: './startCampaign.component.html',
  styleUrls: ['./startCampaign.component.css']
})
export class StartCampaignComponent implements OnInit {

  constructor(private httpService: HttpService) { }
  title: any;
  type: any;
  estimateAmount: any;
  description: any;
  projectData: any;
  tagline: string;
  amount: string;
  vediourl: string;
  campaignImage: string;
  campaignData;
  images;
  imagePath;
  ngOnInit() {
  }
  startCampaign() {
    const campaignData = {
    title : this.title,
    tagline : this.tagline,
    amount: this.amount,
    description: this.description,

    // imagePath: this.imagePath.append('file', this.images)
    };
    this.httpService.startCampaign(campaignData).subscribe( campaignData => {
      alert('Campaign posted');
      console.log(campaignData);
  });
  }
  selectImage(event) {
    if(event.target.files.length > 0){
    const file = event.target.files[0];
    this.images = file;
    }
}
selectVedio(event) {
  if(event.target.files.length > 0){
  const file = event.target.files[0];
  this.vediourl = file;
  }
}
uploadimgFile() {
  const formData = new FormData();
  formData.append('file', this.images);
  this.httpService.campaignImage(formData).subscribe( formData => {
    console.log(formData);
    alert('img uploaded');
  }
    );
}
uploadvedioFile() {
  const formData = new FormData();
  formData.append('file', this.vediourl);
  this.httpService.campaignVedio(formData).subscribe( formData => {
    console.log(formData);
    alert('vedio uploaded');
  });
}
}


