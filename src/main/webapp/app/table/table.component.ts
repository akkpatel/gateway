import { Component, OnInit, Input } from '@angular/core';
import { TiresTableService } from '../tires-table.service';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../sku/sku.model';

@Component({
  selector: 'jhi-table',
  templateUrl: './table.component.html',
  styles: [
    'table.scss'
  ]
})
export class TableComponent implements OnInit {
  @Input() tableData: Observable<any[]>;
  @Input() mockTableData: Sku[];

  tires: Observable<any[]>;
  columnHeaders: string[];

  constructor(
    private tiresTableService: TiresTableService
  ) { }

  ngOnInit() {
    this.columnHeaders = this.tiresTableService.getTableHeaders();
  }

}
