import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './createAccount/createAccount.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { StartProjectComponent } from './startProject/startProject.component';
import { CartComponent } from './cart/cart.component';
import { ProjectDetailsComponent } from './projectDetails/projectDetails.component';
import { BackerListComponent } from './backerList/backerList.component';
import { UpdatesComponent } from './updates/updates.component';
import { CommentComponent } from './comment/comment.component';
import { CampaignStoryComponent } from './campaignStory/campaignStory.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'startProject', component: StartProjectComponent },
  { path: 'cart', component: CartComponent},
  { path: 'projectDetails', component: ProjectDetailsComponent},
  { path: 'bakersList', component: BackerListComponent},
  { path: 'comment', component: CommentComponent},
  { path: 'updates', component: UpdatesComponent},
  { path: 'story', component: CampaignStoryComponent},
  { path: 'reviews', component: ReviewsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
