import { Route } from '@angular/router';

import { PurchasereportComponent } from './purchasereport.component';

export const PURCHASE_ROUTE: Route = {
    path: 'purchasereport',
    component: PurchasereportComponent,
    data: {
        authorities: [],
        pageTitle: 'PurchaseReport!'
    }
};