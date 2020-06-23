import * as faker from 'faker';
import { Builder } from 'src/app/testing/builder';
import { DogPic } from '../interfaces/dog-pic';

export class DogPicBuilder extends Builder<DogPic> {

    _result = faker.image.imageUrl()

}