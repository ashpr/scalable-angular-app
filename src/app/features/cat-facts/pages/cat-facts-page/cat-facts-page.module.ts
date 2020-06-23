import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatFactsListModule } from '../../components/cat-facts-list/cat-facts-list.module';
import { CatFactsPageComponent } from './cat-facts-page.component';



@NgModule({
  declarations: [
    CatFactsPageComponent
  ],
  imports: [
    CommonModule,
    CatFactsListModule
  ],
  exports: [
    CatFactsPageComponent
  ]
})
export class CatFactsPageModule { }
