import { BaseEntity } from './../../shared';

export class Sku implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public quantity?: number,
        public currentSales?: number,
        public previousSales?: number,
        public percentChange?: number,
    ) {
    }
}
