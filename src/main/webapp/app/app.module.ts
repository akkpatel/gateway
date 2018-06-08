import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { Ng2Webstorage, LocalStorageService, SessionStorageService  } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthInterceptor } from './blocks/interceptor/auth.interceptor';
import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { GatewaySharedModule, UserRouteAccessService } from './shared';
import { GatewayAppRoutingModule} from './app-routing.module';
import { GatewayHomeModule } from './home/home.module';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    NavbarComponent,
    ErrorComponent
} from './layouts';

import { TiresTableService } from './tires-table.service';
// import { ButtonComponent } from './atoms/button/button.component';
import { H1Component } from './components/atoms/h1/h1.component';
import { ImgComponent } from './components/atoms/img/img.component';
import { MainNavbarComponent } from './components/organisms/navbar/navbar.component';


@NgModule({
    imports: [
        BrowserModule,
        ClarityModule.forRoot(),
        GatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GatewaySharedModule,
        GatewayHomeModule,
        HttpClientModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        MainNavbarComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        // ButtonComponent,
        H1Component,
        ImgComponent
    ],
    providers: [
        ProfileService,
        PaginationConfig,
        TiresTableService,
        UserRouteAccessService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
            deps: [
                LocalStorageService,
                SessionStorageService
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [
                JhiEventManager
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [
                Injector
            ]
        }
    ],
    bootstrap: [ JhiMainComponent ]
})
export class GatewayAppModule {}
