import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DogBreedsListModule } from '../../components/dog-breeds-list/dog-breeds-list.module';
import { DogFrameModule } from '../../components/dog-frame/dog-frame.module';
import { DogToolbarModule } from '../../components/dog-toolbar/dog-toolbar.module';
import { DogPicPageComponent } from './dog-pic-page.component';



@NgModule({
  declarations: [DogPicPageComponent],
  imports: [
    CommonModule,
    DogFrameModule,
    DogToolbarModule,
    DogBreedsListModule
  ],
  exports: [DogPicPageComponent]
})
export class DogPicPageModule { }
