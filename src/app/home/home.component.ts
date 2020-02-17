import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpService,private router: Router) { }
title = "name";
projectData ;
  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.httpService.getProject().subscribe(data => {
  this.projectData = data;
    })
}
projectDetails(){

  this.router.navigate(['projectDetails']);

}
}
