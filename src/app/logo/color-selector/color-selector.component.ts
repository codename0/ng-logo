import {Component, HostListener, Input} from '@angular/core';
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

  @HostListener('mousewheel', ['$event'])
  onTouchMove(event) { console.log(event); event.preventDefault(); }

  constructor() {
    this.colors = COLORS;
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
