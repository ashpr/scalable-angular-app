import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DogPicPageComponent } from 'src/app/features/dog-pics/pages/dog-pic-page/dog-pic-page.component';
import { DogPicPageModule } from 'src/app/features/dog-pics/pages/dog-pic-page/dog-pic-page.module';

const routes: Route[] = [
    {
        path: '',
        component: DogPicPageComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        DogPicPageModule
    ]
})
export class DogPicsRouterModule {

}