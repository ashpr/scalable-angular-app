import { Component } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { CatFactsApiService } from '../../services/cat-facts-api.service';

@Component({
  selector: 'app-cat-facts-page',
  templateUrl: './cat-facts-page.component.html',
  styleUrls: ['./cat-facts-page.component.css']
})
export class CatFactsPageComponent {

  public readonly catFacts$ = this.catFactsApiService.getCatFacts();

  constructor(
    private catFactsApiService: CatFactsApiService
  ) { }

}
