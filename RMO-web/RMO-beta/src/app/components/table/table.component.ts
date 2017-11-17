import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{
    num_of_rows: number;
    count: number;
    rows: Row[] = [];
    row = 
    { "Project": 'xxxxxxxx', "Network": 'xxxxxxxx', "Activity": 'xxxxxxxx', "Network Description": 'xxxxxxx', 
    "Addtional Description": 'xxxxxxxx', "Assigned To": 'xxxxxx',
    "ESD": 'xxxxxxx',
    "EFD": 'xxxxxxx',
    "Days Left": 'xxxxxxxx',
    "State": 'xxxxxxx',
    "Remaining Hours": 'xxxxxxx',
    "Actual Working Hours": 'xxxxxx' };
  columns = [
    { prop: 'Project'},
    { prop: 'Network'},
    { prop: 'Activity'},
    { prop: 'Network Description'},
    { prop: 'Addtional Description'},
    { prop: 'Assigned To'},
    { prop: 'ESD'},
    { prop: 'EFD'},
    { prop: 'Days Left'},
    { prop: 'State'},
    { prop: 'Remaining Hours'},
    { prop: 'Actual Working Hours'},
  ];

  // rows = [
  //   { name_b: 'Austin', gender: 'Male', company: 'Swimlane' },
  //   { name: 'Dany', gender: 'Male', company: 'KFC' },
  //   { name: 'Molly', gender: 'Female', company: 'Burger King' },
  // ];
  // columns = [
  //   { prop: 'name_b' },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];

  constructor() { 
    var i = 0

    console.log("check");
    while (i < 20 ){ 
      this.rows.push(this.row);
      console.log("check 2");
      i++; 
    }

  }



}
