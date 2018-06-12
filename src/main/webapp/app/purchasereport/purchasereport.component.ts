import { Component, OnInit } from '@angular/core';
import { purchaseReportData } from '../purchaseReport';

@Component({
  selector: 'jhi-purchasereport',
  templateUrl: './purchasereport.component.html',
  styles: []
})
export class PurchasereportComponent implements OnInit {
    purchaseReportArray:Array<any> = [];
    constructor() {}

    ngOnInit() {
        this.purchaseReportArray = this.getPurchaseReportData();
        console.log("Purchase Report Array: ", this.purchaseReportArray);
    }

    getPurchaseReportData() {
        console.log(purchaseReportData);
        return purchaseReportData;
    }
}