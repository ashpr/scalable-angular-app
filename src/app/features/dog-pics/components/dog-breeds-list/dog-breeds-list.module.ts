import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogBreedsListComponent } from './dog-breeds-list.component';



@NgModule({
  declarations: [DogBreedsListComponent],
  imports: [
    CommonModule
  ],
  exports: [DogBreedsListComponent]
})
export class DogBreedsListModule { }
