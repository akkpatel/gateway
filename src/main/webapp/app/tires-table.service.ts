import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TIRES } from './assets/tires';

@Injectable()

export class TiresTableService {

  constructor() { }

  getTires(): Observable<any []> {
    return Observable.of(TIRES);
  }

  getTableHeaders(): string[] {
    return ['Brand', 'Quantity', 'Current Sales', 'Previous Sales', '% Change'];
  }
}
