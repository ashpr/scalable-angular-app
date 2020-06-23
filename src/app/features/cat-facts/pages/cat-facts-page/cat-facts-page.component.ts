import { Component, OnInit } from '@angular/core';
import { CatFactsApiService } from '../../services/cat-facts-api.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-cat-facts-page',
  templateUrl: './cat-facts-page.component.html',
  styleUrls: ['./cat-facts-page.component.css']
})
export class CatFactsPageComponent {

  public readonly catFacts$ = this.catFactsApiService.getCatFacts()
    .pipe(pluck('all'));

  constructor(
    private catFactsApiService: CatFactsApiService
  ) { }

}
