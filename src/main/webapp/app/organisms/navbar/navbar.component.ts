import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-mainNavbar',
  templateUrl: './navbar.component.html',
  styles: ['navbar.scss']
})
export class MainNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("In Navbar");
  }

}
