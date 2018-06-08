import { Component, OnInit, Input } from '@angular/core';
// import { AnchorComponent } from '../../atoms/anchor/anchor.component';

@Component({
  selector: 'jhi-navlink',
  templateUrl: './navlink.component.html',
  styles: []
})
export class NavlinkComponent implements OnInit {
  @Input() navlinkText: string;
  constructor() { }

  ngOnInit() {
  }

}
