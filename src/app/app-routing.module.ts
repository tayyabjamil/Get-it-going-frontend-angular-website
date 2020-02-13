import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './createAccount/createAccount.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { StartProjectComponent } from './startProject/startProject.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'startProject', component: StartProjectComponent },
  { path: 'cart', component: CartComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
