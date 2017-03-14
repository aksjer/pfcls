import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GestureModel } from '../models/gesture.model';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {

  @Input() end: boolean;
  @Output() choiceEvent: EventEmitter<GestureModel> = new EventEmitter();
  gestures: GestureModel[];

  ngOnInit() {
    this.gestures = [new GestureModel('Pierre'),
    new GestureModel('Feuille'),
    new GestureModel('Ciseaux'),
    new GestureModel('Lézard'),
    new GestureModel('Spock')
    ];
  }

  selected(gesture: GestureModel) {
    this.choiceEvent.emit(gesture);
  }

}
