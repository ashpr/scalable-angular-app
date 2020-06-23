import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-frame',
  templateUrl: './dog-frame.component.html',
  styleUrls: ['./dog-frame.component.css']
})
export class DogFrameComponent {

  @Input() dogPicSrc: string;

}
