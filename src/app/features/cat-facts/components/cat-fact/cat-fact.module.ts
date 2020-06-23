import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatFactComponent } from './cat-fact.component';



@NgModule({
  declarations: [CatFactComponent],
  imports: [
    CommonModule
  ],
  exports: [CatFactComponent]
})
export class CatFactModule { }
