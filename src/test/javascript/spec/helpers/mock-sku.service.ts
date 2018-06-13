// import { SpyObject } from './spyobject';
import { SkuService } from '../../../../main/webapp/app/sku/sku.service';
import { Injectable } from '@angular/core';
// import { SkuService } from '../../../../main/webapp/app/sku/sku.service';
// import Spy = jasmine.Spy;
import { Observable } from 'rxjs';

@Injectable()
export class MockSkuService extends SkuService {

    public sample(): Observable<any> {
        return Observable.of(<any>{name: 'Michelin'});
    }
}
