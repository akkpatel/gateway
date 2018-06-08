import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-anchor',
  templateUrl: './anchor.component.html',
  styles: ['./anchor.scss']
})
export class AnchorComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
