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
import { StartProjectComponent } from './startProject/startProject.component';
import { CartComponent } from './cart/cart.component';
import { ProjectDetailsComponent } from './projectDetails/projectDetails.component';
import { CampaignStoryComponent } from './campaignStory/campaignStory.component';
import { UpdatesComponent } from './updates/updates.component';
import { BackerListComponent } from './backerList/backerList.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      CreateAccountComponent,
      ForgetPasswordComponent,
      StartProjectComponent,
      CartComponent,
      ProjectDetailsComponent,
      CampaignStoryComponent,
      UpdatesComponent,
      BackerListComponent,
      ReviewsComponent,
      CommentComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
