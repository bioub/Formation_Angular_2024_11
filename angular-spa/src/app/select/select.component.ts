import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class SelectComponent {
  @Input() items = ['Item 1', 'Item 2', 'Item 3'];
  @Input() value = 'Item 2';
  isMenuOpen = false;

  @Output() valueChange = new EventEmitter<string>();

  // private hostRef: ElementRef<HTMLElement>;
  // constructor(hostRef: ElementRef<HTMLElement>) {
  //   this.hostRef = hostRef;
  // }

  constructor(private hostRef: ElementRef<HTMLElement>) {}

  @HostListener('window:click', ['$event'])
  handleHostClick(event: MouseEvent) {
    if (!this.hostRef.nativeElement.contains(event.target as HTMLElement)) {
      this.isMenuOpen = false;
    }
  }

  handleItemClick(item: string) {
    this.isMenuOpen = false;
    this.value = item;
    this.valueChange.emit(item);
  }
}
