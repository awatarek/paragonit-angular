import { Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { AuthGuard } from '../shared';
import { ReceiptComponent, FinanceComponent, MainComponent } from './components';


export let panelRoutes: Routes = [
    {
        path: '',
        component: PanelComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: 'receipt',
                component: ReceiptComponent,
                canActivate: [ AuthGuard ],
            },
            {
                path: 'finance',
                component: FinanceComponent,
                canActivate: [ AuthGuard ],
            },
            {
                path: '',
                component: MainComponent,
            }
        ]
    }
    /*{ 
        path: '',
        component: PanelComponent, 
        canActivate: [ AuthGuard ],
        pathMatch: 'full'
    },
    {
        path: 'receipt',
        component: ReceiptComponent,
        canActivate: [ AuthGuard ],
    },
    {
        path: 'finance',
        component: FinanceComponent,
        canActivate: [ AuthGuard ],
    },*/
];
