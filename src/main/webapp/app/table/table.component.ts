import { Component, OnInit } from '@angular/core';
import { TiresTableService } from '../tires-table.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-table',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit {
  tires: Observable<any[]>;
  columnHeaders: string[];

  constructor(
    private tiresTableService: TiresTableService
  ) { }

  ngOnInit() {
    console.log('we got called here');
    this.columnHeaders = this.tiresTableService.getTableHeaders();

    this.tires = this.tiresTableService.getTires();
    console.log(this.tires);
  }

}
