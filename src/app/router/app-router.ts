import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AppRouterPaths } from './app-router-paths';

const routes: Route[] = [
    {
        path: AppRouterPaths.CatFacts,
        loadChildren: () => import('./cat-facts/cat-facts.router').then(m => m.CatFactsRouterModule)
    },
    {
        path: AppRouterPaths.DogPics,
        loadChildren: () => import('./dog-pics/dog-pics.router').then(m => m.DogPicsRouterModule)
    },
    {
        path: '**',
        redirectTo: AppRouterPaths.CatFacts
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class AppRouterModule { }