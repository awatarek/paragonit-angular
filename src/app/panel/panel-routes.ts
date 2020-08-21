import { Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { AuthGuard } from '../shared';


export const panelRoutes: Routes = [
    { 
        path: '',
        component: PanelComponent, 
        canActivate: [ AuthGuard ]
    },
    {
        path: 'finance',
        component: PanelComponent, 
        canActivate: [ AuthGuard ]
    }
];
