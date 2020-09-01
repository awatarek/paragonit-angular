import { Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { AuthGuard } from '../shared';
import { FinanceComponent } from './components/finance/finance.component';


export const panelRoutes: Routes = [
    { 
        path: '',
        component: PanelComponent, 
        canActivate: [ AuthGuard ],
        pathMatch: 'full'
    },
    {
        path: 'receipt',
        component: FinanceComponent,
        canActivate: [ AuthGuard ],
    },
    {
        path: 'finance',
        component: FinanceComponent,
        canActivate: [ AuthGuard ],
    },
];
