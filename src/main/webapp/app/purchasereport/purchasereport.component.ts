import { Component, OnInit } from '@angular/core';
import { SkuService } from '../sku/sku.service';
import { Sku } from '../sku/sku.model';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'jhi-purchasereport',
  templateUrl: './purchasereport.component.html',
  styles: [
      'purchasereport.scss'
  ]
})
export class PurchasereportComponent implements OnInit {
    purchaseReportArray: Array<any> = [];
    purchaseReportData: Observable<any[]>;

    constructor(
      private skuService: SkuService,
    ) {}

    ngOnInit() {
        this.getPurchaseReportData();
    }

    getPurchaseReportData() {
      this.skuService.sample().subscribe(
            (res) => {
                console.log('lets check the res: ', res);
                this.purchaseReportData =  res.body;
            }
        );
    }
}
