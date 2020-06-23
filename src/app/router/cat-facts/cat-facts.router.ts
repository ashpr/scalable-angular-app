import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CatFactsPageComponent } from 'src/app/features/cat-facts/pages/cat-facts-page/cat-facts-page.component';
import { CatFactsPageModule } from 'src/app/features/cat-facts/pages/cat-facts-page/cat-facts-page.module';

const routes: Route[] = [
    {
        path: '',
        component: CatFactsPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CatFactsPageModule
    ]
})
export class CatFactsRouterModule {

}