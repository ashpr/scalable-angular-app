import * as faker from 'faker';
import { Builder } from 'src/app/testing/builder';
import { CatFact } from '../interfaces/cat-fact';
import { CatFactUserBuilder } from './cat-facts-user-builder';

export class CatFactsBuilder extends Builder<CatFact> {

    _result: CatFact = {
        _id: faker.random.alphaNumeric(8),
        text: faker.lorem.words(),
        type: faker.lorem.word(),
        user: (new CatFactUserBuilder()).build(),
        upvotes: faker.random.number()
    }

}