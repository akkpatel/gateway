import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { GatewaySharedModule } from '../shared';
import { SkuService } from '../sku/sku.service';

import { HOME_ROUTE, HomeComponent } from './';
import { TableComponent } from '../table/table.component';
import { ButtonComponent } from '../atoms/button/button.component';
import { NavlinkComponent } from '../molecules/navlink/navlink.component';
import { AnchorComponent } from '../atoms/anchor/anchor.component';
import { AddSkuComponent } from '../sku/addSku.component';

@NgModule({
    imports: [
        GatewaySharedModule,
        ClarityModule.forRoot(),
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    exports: [
        NavlinkComponent
    ],
    declarations: [
        HomeComponent,
        TableComponent,
        ButtonComponent,
        NavlinkComponent,
        AnchorComponent,
        AddSkuComponent
    ],
    entryComponents: [
    ],
    providers: [
    SkuService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayHomeModule {}
