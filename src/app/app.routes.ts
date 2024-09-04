import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { UserService } from '@services/user.service';

export const routes: Routes = [
    {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
        children: [
            {
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component').then(m => m.ChangeDetectionComponent)
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component').then(m => m.ControlFlowComponent)
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                loadComponent: () => import('./dashboard/pages/defer-options/defer-option.component').then(m => m.DeferOptionsComponent)
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component').then(m => m.DeferViewsComponent)
            },
            {
                path: 'user/:id',
                title: 'User',
                loadComponent: () => import('./dashboard/pages/user/user.component').then(m => m.UserComponent)
            },
            {
                path: 'users',
                title: 'Users',
                loadComponent: () => import('./dashboard/pages/users/users.component').then(m => m.UsersComponent)
            },
            {
                path: 'view-transition',
                title: 'View Transition 1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component').then(m => m.ViewTransitionComponent)
            },
            {
                path: 'view-transition-2',
                title: 'View Transition 2',
                loadComponent: () => import('./dashboard/pages/view-transition-2/view-transition-2.component').then(m => m.ViewTransitionComponent)
            },
            {
                path: 'inputs-outputs',
                title: 'Inputs and Outputs',
                loadComponent: () => import('./dashboard/pages/input-output/input-output.component').then(m => m.InputOutputComponent)
            },
            {
                path: 'angular-material',
                title: 'Angular Material',
                loadComponent: () => import('./dashboard/pages/material/material.component').then(m => m.MaterialComponent)
            },
            {
                path: '**',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        // redirectTo: 'dashboard',
        // no puede ser async, si queremos hacer eso debemos hacerlo en un Guard o una funcion para verificar si el usuario esta autenticado o si tiene acceso o no
        redirectTo: (route) => {
            // console.log('Redirecting to dashboard', route);
            // se puede injectar servicios y hacer validaciones
            // const authService = inject(UserService);
            // if (UserService.isAuthenticated()) {
            //     return '/dashboard';
            // }
            return '/dashboard/angular-material';
        },
        pathMatch: 'full'
    }
];
