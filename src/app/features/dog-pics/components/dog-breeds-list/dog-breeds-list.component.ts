import { Component, Inject } from '@angular/core';
import { DogBreedsDict } from '../../interfaces/dog-breeds-dict';
import { DOG_BREEDS } from '../../tokens/dog-breeds.token';

@Component({
  selector: 'app-dog-breeds-list',
  templateUrl: './dog-breeds-list.component.html',
  styleUrls: ['./dog-breeds-list.component.css']
})
export class DogBreedsListComponent {

  constructor(@Inject(DOG_BREEDS) public readonly dogBreeds: DogBreedsDict) { }

}
