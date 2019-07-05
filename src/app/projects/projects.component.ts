import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
projects = [
  	[ "Car Spa Management","Business Process Management","Krennova Pvt. Ltd.","Angular/Express Trainee", "2017", "2017","Internal System"],
  	[ "Jobkhaani", "Job Portal/Web Application","Krennova Pvt. Ltd.",  "Full Stack Developer",  "2017",  "2018", "jobkhaani.com"],
  	[ "Print-sewa", "E-Commerce","Krennova Pvt. Ltd.", "Full stack developer", "2017", "2018", "printsewa.com.np"],
  	[ "Coffee MIS",  "Management Information System",  "Krennova Pvt. Ltd",  "Full Stack Developer",  "2018", "2018", "coffeemis.com"],
    [ "Student Management System", "Management Information System", "SASOFT Enterprises Pvt. Ltd.", "Product Manager", "2018", "Ongoing", "sasoftsms.edumech.com.au" ]
  ];

  colLength = [0,1,2,3,4,5,6];
  tableHeaders = ['Name','Project Type', 'Company Name', 'Role', 'From', 'To','URL'];
  mainHeading = "Project Details";
  constructor() { }

  ngOnInit() {
  }

}
