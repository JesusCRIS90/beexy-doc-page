import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/introduction/pages/introduction-page/introduction-page.component'),
    },
    {
        path: 'docs',
        loadComponent: () => import('../app/docs/side-menu/pages/side-menu-page/side-menu-page.component'),
        children: [
            {
                path: 'center-layout',
                loadComponent: () => import('../app/docs/layouts/pages/center-layout-page/center-layout-page.component')
            },
            {
                path: 'vertical-layout',
                loadComponent: () => import('../app/docs/layouts/pages/vertical-layout-page/vertical-layout-page.component')
            },
            {
                path: 'horizontal-layout',
                loadComponent: () => import('../app/docs/layouts/pages/horizontal-layout-page/horizontal-layout-page.component')
            },
            {
                path: 'fixed-width-layout',
                loadComponent: () => import('../app/docs/layouts/pages/fixed-width-layout-page/fixed-width-layout-page.component')
            },
            {
                path: 'floating-layout',
                loadComponent: () => import('../app/docs/layouts/pages/floating-layout-page/floating-layout-page.component')
            },
            {
                path: 'grid-1d-layout',
                loadComponent: () => import('../app/docs/layouts/pages/grid-layout-1d-page/grid-layout-1d-page.component')
            },
            {
                path: 'grid-2d-layout',
                loadComponent: () => import('../app/docs/layouts/pages/grid-layout-2d-page/grid-layout-2d-page.component')
            },
            {
                path: 'pair-layout',
                loadComponent: () => import('../app/docs/layouts/pages/pair-layout-page/pair-layout-page.component')
            },
            {
                path: 'responsive-card-layout',
                loadComponent: () => import('../app/docs/layouts/pages/responsive-card-grid-layout-page/responsive-card-grid-layout-page.component')
            },
            {
                path: 'background-layout',
                loadComponent: () => import('../app/docs/layouts/pages/background-layout-page/background-layout-page.component')
            },
            {
                path: '**',
                redirectTo: 'center-layout'
            }
        ],

    },
    {
        path: '**',
        redirectTo: 'main'
    }
];