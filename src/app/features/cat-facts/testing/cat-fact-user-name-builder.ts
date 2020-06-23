import * as faker from 'faker';
import { CatFactUserName } from '../interfaces/cat-fact-user-name';
import { Builder } from 'src/app/testing/builder';

export class CatFactUserNameBuilder extends Builder<CatFactUserName> {

    _result: CatFactUserName = {
        first: faker.name.firstName(),
        last: faker.name.lastName()
    }

}