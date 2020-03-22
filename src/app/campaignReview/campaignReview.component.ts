import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-campaignReview',
  templateUrl: './campaignReview.component.html',
  styleUrls: ['./campaignReview.component.css']
})
export class CampaignReviewComponent implements OnInit {

  name;
  details;
  reviewId;
  constructor(private httpService: HttpService , public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
      const id = (this.route.snapshot.paramMap.get('id'));
      this.reviewId = id;
}
uploadReview(id) {
const newReview = {

  name: this.name,
  details: this.details,
  reviewId: id
};
// tslint:disable-next-line: no-shadowed-variable
this.httpService.createReview(newReview).subscribe(newReview => {
  alert('Review Posted');
})
}
}
