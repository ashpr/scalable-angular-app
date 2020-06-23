import { Component } from '@angular/core';
import { AppRouterPaths } from '../router/app-router-paths';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  public readonly Paths = AppRouterPaths;

}
