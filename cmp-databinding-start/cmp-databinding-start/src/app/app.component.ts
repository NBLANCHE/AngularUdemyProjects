import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defining a test server in server elements 
  serverElements = [{type: 'server', name: 'Testserver', content: 'this is a test!'}];
}
