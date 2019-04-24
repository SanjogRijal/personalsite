import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
 experience = [
	  	["Intern","IT Training Pvt. Ltd.","Laravel Development Intern", "2016 August", "2017 February"],
	  	[ "Trainee", "Krennova Pvt. Ltd.",  "Angular Development (Inventory management/Income/expense Management)",  "2017 June 17",  "2017 September 17"],
	  	[ "MEAN Developer", "Krennova Pvt. Ltd.",  "Full Stack Developer (MEAN STACK/MySQL)",  "2017 September",  "2018 October"],
	  	[ "Product Owner/Nepal Office Manager",  "SASOFT Pvt. Ltd",  "Product Owner in Agile Team",  "2018 November",  "Ongoing"]
	];

   colLength = [0,1,2,3,4];
   tableHeaders = ['Position','Company', 'Skills and Responsibilites', 'From', 'To'];
   mainHeading = "Employement Details";
  constructor() { }

  ngOnInit() {

  	
  }

}
