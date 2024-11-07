import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  value = 'Item 2';
  isMenuOpen = false;

}
