import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignOut() {

   }
  
  onAccountDeleted() {
    
   }
  

}
