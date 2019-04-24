import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  education = [
  	["Project Management", "Agile Project Management with SCRUM Framework"],
    ["System Analysis and Design", "Requirement Analysis, Feasibility Analysis, Database Analysis, ER Design, etc"],
    ["MEAN Full Stack Developer","MongoDB/MySql, Express, Angular, Nodejs"],
    ["Laravel Backed Development", "Laravel CRUD operations"],
    ["Data Representation","Data Representation with Highcharts, Google Charts, etc"],
    ["Basics of Python", "Numpy, Pandas, Classes, Objects, Functions, etc."],
    ["Java Basics/JDBC","Java Applet, Java OOP, Java AWT/SWING, JDBC"],
  ];

  colLength = [0,1];
  tableHeaders = ['Name', 'Details'];
  mainHeading = "Skills";
  
  constructor() { }

  ngOnInit() {
  }

}
