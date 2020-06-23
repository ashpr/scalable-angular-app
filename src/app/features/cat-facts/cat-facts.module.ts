import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CatFactsModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CatFactsModule,
      providers: []
    }
  }

}
