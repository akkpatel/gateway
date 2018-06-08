import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sku } from '../sku/sku.model';
import { SkuService } from '../sku/sku.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { JhiEventManager } from 'ng-jhipster';


@Component({
  selector: 'add-sku',
  templateUrl: './addSku.component.html',
  styles: [
  ]
})
export class AddSkuComponent implements OnInit {
  @Input() sku: Sku;
  isSaving: boolean;
  id: null;

  constructor(
    private skuService: SkuService,
    private eventManager: JhiEventManager,
  ) { }

  ngOnInit() {
    this.isSaving = false;
  }
  confirmDelete() {
    this.skuService.delete(this.id).subscribe((response) => {
        this.eventManager.broadcast({
            name: 'skuListModification',
            content: 'Deleted an sku'
        });
    });
  }
  save() {
        console.log('we are in save: ', this.sku);
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

}
