import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DogPicApiService } from '../../services/dog-pic-api.service';

@Component({
  selector: 'app-dog-pic-page',
  templateUrl: './dog-pic-page.component.html',
  styleUrls: ['./dog-pic-page.component.css']
})
export class DogPicPageComponent {

  private update$ = new BehaviorSubject(undefined);
  public readonly dogPicUrl$ = this.update$.pipe(switchMap(() => this.dogPicApiService.getRandomDogPic()));

  constructor(private dogPicApiService: DogPicApiService) { }

  public refresh(): void {
    this.update$.next(undefined);
  }

}
