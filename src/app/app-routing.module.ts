import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './createAccount/createAccount.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { CartComponent } from './cart/cart.component';
import { BackerListComponent } from './backerList/backerList.component';
import { UpdatesComponent } from './updates/updates.component';
import { CommentComponent } from './comment/comment.component';
import { CampaignStoryComponent } from './campaignStory/campaignStory.component';

import { ProfileComponent } from './Profile/Profile.component';
import { CampaignDetailsComponent } from './campaignDetails/campaignDetails.component';
import { StartCampaignComponent } from './startCampaign/startCampaign.component';
import { AuthGuard } from './auth.guard';
import { MyProjectsComponent } from './myProjects/myProjects.component';
import { CampaignReviewComponent } from './campaignReview/campaignReview.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'startCampaign', component: StartCampaignComponent },
  { path: 'cart', component: CartComponent},
  { path: 'campaignDetails/:id', component: CampaignDetailsComponent, canActivate: [AuthGuard]},
  { path: 'bakersList', component: BackerListComponent},
  { path: 'comment', component: CommentComponent},
  { path: 'updates', component: UpdatesComponent},
  { path: 'campaignStory/:id', component: CampaignStoryComponent},
  { path: 'campaignReview/:id', component: CampaignReviewComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'myProjects', component: MyProjectsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
