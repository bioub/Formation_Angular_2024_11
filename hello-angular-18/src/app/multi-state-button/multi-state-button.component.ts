import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  standalone: true,
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  value = 'Item 2';

  next() {
    const index = this.items.indexOf(this.value);
    this.value = this.items[(index + 1) % this.items.length];
  }
}
