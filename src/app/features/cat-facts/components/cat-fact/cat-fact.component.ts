import { Component, Input } from '@angular/core';
import { CatFact } from '../../interfaces/cat-fact';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})
export class CatFactComponent {

  @Input() catFact: CatFact;

}
