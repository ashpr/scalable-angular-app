import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';



@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CoreComponent]})
export class CoreModule { }
