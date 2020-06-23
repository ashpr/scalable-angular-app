import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';
import { CatFactsModule } from './features/cat-facts/cat-facts.module';
import { DogPicsModule } from './features/dog-pics/dog-pics.module';
import { AppRouterModule } from './router/app-router';

@NgModule({
    imports: [
        /** Angular */
        BrowserModule,
        RouterModule.forRoot([]),

        /** Core */
        CoreModule,

        /** Routing */
        AppRouterModule,

        /** Features */
        CatFactsModule.forRoot(),
        DogPicsModule.forRoot()
    ],
    bootstrap: [
        CoreComponent
    ]
})
export class AppModule { }