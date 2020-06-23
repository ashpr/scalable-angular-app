import { ModuleWithProviders, NgModule } from "@angular/core";
import { dogBreedsInitializerProvider } from './providers/dog-breeds-initializer.provider';

@NgModule()
export class DogPicsModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DogPicsModule,
            providers: [
                dogBreedsInitializerProvider
            ]
        }
    }

}