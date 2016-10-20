import {Component, Input, HostListener} from '@angular/core';
import { COLORS, Color } from '../../shared/';

@Component({
  selector: 'app-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent {

  selectedColor: Color;
  colors: Color[];
  @Input() buttonClicked: boolean;

  // @HostListener('window:touchmove', ['$event'])
  // onTouchMove(ev) {
  //   console.log(ev);
  // }

  constructor() {
    this.colors = COLORS;
  }

  ngOnInit() {
    window.addEventListener('touchmove', function() {});
  }

  selectColor(color: Color) {
    if (this.selectedColor && color.name === this.selectedColor.name) {
      this.buttonClicked = !this.buttonClicked;
    } else {
      this.buttonClicked = true;
    }
    this.selectedColor = color;
  }

}
