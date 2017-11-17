import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  //defining a javascript object 

  // need to access this element property in app component 
  @Input('srvElement') element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
