import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute } from './layouts';
import { navbarRoute } from './components/organisms/navbar/navbar.route';
import { PURCHASE_ROUTE } from './purchasereport/purchasereport.route';
import { DEBUG_INFO_ENABLED } from './app.constants';

const LAYOUT_ROUTES = [
    navbarRoute,
    PURCHASE_ROUTE,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class GatewayAppRoutingModule {}
