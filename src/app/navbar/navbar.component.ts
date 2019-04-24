import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output()  showme: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showThis(route: String){
    // console.log(route);
  	this.showme.emit(route);
  }

}
