import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
	showme: String = 'aboutme';
  constructor() { }

  ngOnInit() {
  }

  updateValue($event){
  	this.showme = $event;
  }

}
