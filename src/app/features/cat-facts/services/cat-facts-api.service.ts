import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { CatFact } from '../interfaces/cat-fact';
import { CatFactsConfiguration } from '../interfaces/cat-facts-configuration';
import { GetCatFactsResponse } from '../interfaces/get-cat-facts-response';
import { CAT_FACTS_CONFIGURATION } from '../tokens/cat-facts-configuration.token';

@Injectable({ providedIn: 'root' })
export class CatFactsApiService {

  constructor(
    private http: HttpClient,
    @Inject(CAT_FACTS_CONFIGURATION) private catFactsConfiguration: CatFactsConfiguration
  ) { }

  public getCatFacts(): Observable<CatFact[]> {
    return this.http.get<GetCatFactsResponse>(`${this.catFactsConfiguration.API}/facts`).pipe(pluck('all'));
  }

}
