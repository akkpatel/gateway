import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-h1',
  templateUrl: './h1.component.html',
  styles: []
})
export class H1Component implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
