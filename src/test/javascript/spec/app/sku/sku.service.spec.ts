import { TestBed } from '@angular/core/testing';

import { PurchasereportComponent } from '../../../../../main/webapp/app/purchasereport/purchasereport.component';
import { SkuService } from '../../../../../main/webapp/app/sku/sku.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs/observable/of';

describe('Sku Service', () => {
    let skuService: SkuService;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                PurchasereportComponent
            ],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                SkuService
            ]
        })
        .overrideTemplate(PurchasereportComponent, '')
        .compileComponents();

        skuService = TestBed.get(SkuService);
    });

    it('should have a service instance', () => {
        expect(skuService).toBeDefined();
    });

    it('should return the mocked data in the subscribe', () => {
        const spy = spyOn(skuService, 'sample').and.returnValue(
          of({
            name: 'Michelin'
          })
        );

        // act
        skuService.sample().subscribe(((data) => {
          expect(data.name).toBe('Michelin');
        }));

        // assert
        expect(spy).toHaveBeenCalled();
    });
});
