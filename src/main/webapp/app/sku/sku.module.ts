import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GatewaySharedModule } from '../shared';
import {
    SkuService,
} from './';

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
