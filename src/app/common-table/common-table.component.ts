import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {
  @Input() tableHeaders: Array<any>;
  @Input() dataArray: Array<object>;
  @Input() colLength: Array<any>;
  @Input() mainHeading: String;
  constructor() { }

  ngOnInit() {
  	console.log(this.dataArray);
  	console.log(this.colLength);
  	console.log(this.tableHeaders);
  }

}
