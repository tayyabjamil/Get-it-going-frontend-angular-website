import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-startProject',
  templateUrl: './startProject.component.html',
  styleUrls: ['./startProject.component.css']
})
export class StartProjectComponent implements OnInit {
  title: any;
  type: any;
  estimateAmount: any;
  description: any;
  projectData: any;

  constructor(private httpService : HttpService) { }

  ngOnInit() {
  }

  startProject() {
    const projectData = {
    title : this.title,
    type : this.type,
    estimateAmount: this.estimateAmount,
    description: this.description
    }
    this.httpService.startProject(projectData).subscribe( projectData => {
      alert('project posted');
  })
  }
}
