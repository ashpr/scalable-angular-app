import { Component, Input } from '@angular/core';
import { CatFact } from '../../interfaces/cat-fact';

@Component({
  selector: 'app-cat-facts-list',
  templateUrl: './cat-facts-list.component.html',
  styleUrls: ['./cat-facts-list.component.css']
})
export class CatFactsListComponent {

  @Input() catFacts: CatFact[]

}
