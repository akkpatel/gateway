import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchasereportComponent } from './purchasereport.component';
import { PURCHASE_ROUTE } from './purchasereport.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ PURCHASE_ROUTE ])
  ],
  declarations: [PurchasereportComponent]
})
export class PurchasereportModule { }
