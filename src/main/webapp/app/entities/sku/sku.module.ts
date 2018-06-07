import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from '../../shared';
import {
    SkuService,
} from './';

const ENTITY_STATES = [
];

@NgModule({
    imports: [
        GatewaySharedModule,
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    providers: [
        SkuService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewaySkuModule {}
