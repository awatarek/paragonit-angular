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
                canActivate: [ AuthGuard ],
                children: [
                    {
                        path:'',
                        component: FinanceComponent,
                    },
                    {
                        path:'success',
                        component: FinanceComponent,
                    },
                    {
                        path:'canceled',
                        component: FinanceComponent,
                    }

                ],
            },
            {
                path: '',
                component: MainComponent,
            }
        ]
    }
];
