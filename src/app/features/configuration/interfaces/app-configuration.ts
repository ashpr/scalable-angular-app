import { CatFactsConfiguration } from '../../cat-facts/interfaces/cat-facts-configuration';
import { DogPicsConfiguration } from '../../dog-pics/interfaces/dog-pics-configuration';

export interface AppConfiguration {
    CatFacts: CatFactsConfiguration,
    DogPics: DogPicsConfiguration
}