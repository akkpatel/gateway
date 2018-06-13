import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';
// import { HttpClient } from '@angular/common/http';
import { SkuService } from '../sku/sku.service';
import { Sku } from '../sku/sku.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Account, LoginModalService, Principal } from '../shared';
import { Observable } from 'rxjs/Observable';
import { TiresTableService } from '../tires-table.service';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.scss'
    ]

})
export class HomeComponent implements OnInit {
    skus: Sku[];
    sku: Sku;
    isSaving: boolean;

    account: Account;
    modalRef: NgbModalRef;
    tiresJSON = require('../assets/tires.json');
    tires: Observable<any[]>;

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private skuService: SkuService,
        private tiresTableService: TiresTableService
        // private httpService: HttpClient
    ) {
    }

    ngOnInit() {
    console.log('lets check the sku: ', this.sku);
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
        this.tires = this.tiresJSON;
        // this.httpService.get(this.tiresUrl).subscribe(data => {
        //     console.log(data);
        // });
        this.sku = {
            name: '',
            quantity: 0,
            currentSales: 0,
            previousSales: 0,
            percentChange: 0
        };
        // this.save();
        this.tires = this.tiresTableService.getTires();
        console.log('check the tires: ', this.tires);
        // this.loadAll();
        this.loadSample();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    loadAll() {
        this.skuService.query().subscribe(
            (res: HttpResponse<Sku[]>) => {
                console.log('lets check the res: ', res);
                this.skus = res.body;
            }
        );
    }

    loadSample() {
        console.log('we are in sample');
        this.skuService.sample().subscribe(
            (res: HttpResponse<Sku[]>) => {
                console.log('lets check the res: ', res);
            }
        );
    }

    save() {
        console.log('we are in save');
        this.isSaving = true;
        if (this.sku.id !== undefined) {
        console.log('we are in if');
            this.subscribeToSaveResponse(
                this.skuService.update(this.sku));
        } else {
        console.log('we are in else');
            this.subscribeToSaveResponse(
                this.skuService.create(this.sku));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<Sku>>) {
        result.subscribe((res: HttpResponse<Sku>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: Sku) {
        this.eventManager.broadcast({ name: 'skuListModification', content: 'OK'});
        this.isSaving = false;
    }

    private onSaveError() {
        this.isSaving = false;
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }
}
