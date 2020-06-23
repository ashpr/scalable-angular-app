import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogFrameComponent } from './dog-frame.component';



@NgModule({
  declarations: [DogFrameComponent],
  imports: [
    CommonModule
  ],
  exports: [DogFrameComponent]
})
export class DogFrameModule { }
