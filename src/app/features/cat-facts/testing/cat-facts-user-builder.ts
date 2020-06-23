import * as faker from 'faker';
import { Builder } from 'src/app/testing/builder';
import { CatFactUser } from '../interfaces/cat-fact-user';
import { CatFactUserNameBuilder } from './cat-fact-user-name-builder';

export class CatFactUserBuilder extends Builder<CatFactUser> {

    _result: CatFactUser = {
        _id: faker.random.alphaNumeric(8),
        name: (new CatFactUserNameBuilder()).build()
    }

}