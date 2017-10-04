import { Component, OnInit } from '@angular/core';
@Component({ 
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones;
  txt : String;
  constructor() { 
    console.log(this.txt);
    
    this.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.'
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.'
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.'
      }
    ];
  }

  ngOnInit() {
  }

}
