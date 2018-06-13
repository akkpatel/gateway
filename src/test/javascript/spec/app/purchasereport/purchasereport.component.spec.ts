import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereportComponent } from '../../../../../main/webapp/app/purchasereport/purchasereport.component';
import { SkuService } from '../../../../../main/webapp/app/sku/sku.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockSkuService } from '../../helpers/mock-sku.service';
import { Observable } from 'rxjs';

// import { Observable } from 'rxjs/Observable';

describe('PurchasereportComponent', () => {
    let skuService: SkuService;
    let fixture: ComponentFixture<PurchasereportComponent>;
    let comp: PurchasereportComponent;
    // let mockSkuService: any;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                PurchasereportComponent
            ],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: SkuService,
                    useClass: MockSkuService
                },
                HttpClient
            ]
        })
        .overrideTemplate(PurchasereportComponent, '')
        .compileComponents();

        skuService = TestBed.get(SkuService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PurchasereportComponent);
        comp = fixture.componentInstance;
        // mockSkuService = fixture.debugElement.injector.get(SkuService);
        // console.log('MOCK SKU SERVICE: ', mockSkuService);
    });

    afterEach(() => {
        skuService = null;
        comp = null;
    });

    it('should assign new value to variable', () => {
        expect(comp.testHelloWorldValue).toBe('Hello World');
        comp.testHelloWorld();
        expect(comp.testHelloWorldValue).toBe('Hello New World');
    });

    it('should make http request and store data in observable', () => {
        comp.ngOnInit();
        expect(comp.purchaseReportData).toBe(undefined);

        spyOn(skuService, 'sample').and.returnValue(Observable.of({ body: {name: 'Michelin'}}));
        // spyOnProperty(skuService, 'sample', 'get').and.returnValue(Observable.of({name: 'Michelin'}));
        comp.getPurchaseReportData();
        console.log(comp);
        expect(comp.purchaseReportData).toEqual(<any>{name: 'Michelin'});
        // expect(comp.purchaseReportData).toBe(null);
    });
});
