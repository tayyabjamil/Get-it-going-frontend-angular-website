import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './createAccount/createAccount.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { CartComponent } from './cart/cart.component';
import { CampaignStoryComponent } from './campaignStory/campaignStory.component';
import { UpdatesComponent } from './updates/updates.component';
import { BackerListComponent } from './backerList/backerList.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CommentComponent } from './comment/comment.component';
import { ProfileComponent } from './Profile/Profile.component';
import { CampaignDetailsComponent } from './campaignDetails/campaignDetails.component';
import { StartCampaignComponent } from './startCampaign/startCampaign.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { CampaignReviewComponent } from './campaignReview/campaignReview.component';
import { CampaignRewardComponent } from './campaignReward/campaignReward.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      CreateAccountComponent,
      ForgetPasswordComponent,
      CartComponent,
      CampaignStoryComponent,
      UpdatesComponent,
      BackerListComponent,
      ReviewsComponent,
      CommentComponent,
      ProfileComponent,
      CampaignDetailsComponent,
      StartCampaignComponent,
      CampaignReviewComponent,
      CampaignRewardComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AngularFileUploaderModule
   ],
   providers: [AuthService, AuthGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
