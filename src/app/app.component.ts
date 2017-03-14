import { Component, OnInit } from '@angular/core';
import { GestureModel } from './models/gesture.model';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gesture1: GestureModel;
  gesture2: GestureModel;
  end: boolean;
  timer: any;

  constructor(private mdSnackBar: MdSnackBar) { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.gesture1 = new GestureModel(null, true);
    this.gesture2 = new GestureModel();
    this.end = false;
  }

  selected(gesture: GestureModel) {
    if (!this.gesture1.name) {
      this.gesture1.name = gesture.name;
      this.gesture1.selected = false;
      this.gesture2.selected = true;
      this.timer = setTimeout(() => {
        this.newGame();
        this.mdSnackBar.open('Délai dépassé', null, { duration: 2000 });
      }, 3000);
    } else {
      clearTimeout(this.timer);
      this.gesture2.name = gesture.name;
      this.gesture2.selected = false;
      this.gesture1.visible = true;
      this.gesture2.visible = true;
      this.end = true;
      const mdSnackBarRef = this.mdSnackBar.open(this.gesture1.result(gesture), 'New Game', { duration: 0 });
      mdSnackBarRef.afterDismissed().subscribe(() => this.newGame());
    }
  }

}
