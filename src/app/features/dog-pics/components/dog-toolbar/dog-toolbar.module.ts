import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogToolbarComponent } from './dog-toolbar.component';



@NgModule({
  declarations: [DogToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [DogToolbarComponent]
})
export class DogToolbarModule { }
