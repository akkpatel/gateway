import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasereportComponent } from '../../../../../main/webapp/app/purchasereport/purchasereport.component';
import { SkuService } from '../../../../../main/webapp/app/sku/sku.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

// import { Observable } from 'rxjs/Observable';

describe('PurchasereportComponent', () => {
    // let skuService: SkuService;
    let fixture: ComponentFixture<PurchasereportComponent>;
    let comp: PurchasereportComponent;
    let mockSkuService: any;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [
                PurchasereportComponent
            ],
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                SkuService,
                HttpClient
            ]
        })
        .overrideTemplate(PurchasereportComponent, '')
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PurchasereportComponent);
        comp = fixture.componentInstance;
        mockSkuService = fixture.debugElement.injector.get(SkuService);
        // console.log('MOCK SKU SERVICE: ', mockSkuService);
    });

    it('should assign new value to variable', () => {
        expect(comp.testHelloWorldValue).toBe('Hello World');
        comp.testHelloWorld();
        expect(comp.testHelloWorldValue).toBe('Hello New World');
    });

    it('should make http request and store data in observable', () => {
        expect(comp.purchaseReportData).toBe(undefined);
        mockSkuService.setResponse({'name': 'Michelin'});
        comp.getPurchaseReportData();
    });
});
