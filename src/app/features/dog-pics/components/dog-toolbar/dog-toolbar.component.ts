import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dog-toolbar',
  templateUrl: './dog-toolbar.component.html',
  styleUrls: ['./dog-toolbar.component.css']
})
export class DogToolbarComponent {

  @Output() newDogPic = new EventEmitter<void>();

}
