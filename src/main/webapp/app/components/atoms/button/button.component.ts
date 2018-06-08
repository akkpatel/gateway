import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jhi-button',
  templateUrl: './button.component.html',
  styles: ['button.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  buttonText: string;

  constructor() { }

  ngOnInit() {
    console.log('TEST', this.name);
  }

}
