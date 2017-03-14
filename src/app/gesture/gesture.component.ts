import { Component, Input } from '@angular/core';
import { GestureModel } from '../models/gesture.model';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css']
})
export class GestureComponent {

  @Input() gesture: GestureModel;

}
