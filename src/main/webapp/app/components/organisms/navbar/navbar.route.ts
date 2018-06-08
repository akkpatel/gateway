import { Route } from '@angular/router';

import { MainNavbarComponent } from './navbar.component';

export const navbarRoute: Route = {
    path: '',
    component: MainNavbarComponent,
    outlet: 'navbar'
};
