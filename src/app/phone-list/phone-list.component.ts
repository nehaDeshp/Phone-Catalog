import { Component, OnInit } from '@angular/core';
@Component({ 
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones;selection;
  txt : String;
  constructor() { 
    console.log(this.txt);
    
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
        order:1
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
        order:3
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
        order:2
      }
    ];
  }

  ngOnInit() {
  }

}
