import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactsListComponent } from './cat-facts-list.component';
import { CatFactModule } from '../cat-fact/cat-fact.module';


@NgModule({
  declarations: [CatFactsListComponent],
  imports: [
    CommonModule,
    CatFactModule
  ],
  exports: [CatFactsListComponent]
})
export class CatFactsListModule { }
