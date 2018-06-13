import { Component, OnInit } from '@angular/core';
import { SkuService } from '../sku/sku.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-purchasereport',
  templateUrl: './purchasereport.component.html',
  styles: [
      'purchasereport.scss'
  ]
})
export class PurchasereportComponent implements OnInit {
    purchaseReportData: Observable<any[]>;
    testHelloWorldValue = 'Hello World';

    constructor(
      private skuService: SkuService
    ) {}

    ngOnInit() {
        this.getPurchaseReportData();
        console.log('Ran Test');
    }

    getPurchaseReportData() {
        console.log('we are testing this function');
      this.skuService.sample().subscribe(
            (res) => {
                console.log('lets check the res: ', res);
                this.purchaseReportData =  res.body;
            }
        );
    }

    testHelloWorld() {
        this.testHelloWorldValue = 'Hello New World';
    }
}
