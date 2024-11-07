import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {
  now = new Date();

  @Input() format = 'HH:mm';
  @Input() delay = 1000;

  private interval!: ReturnType<typeof setInterval>;

  constructor() {
    console.log('constructor', this.delay); // 1000
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.delay); // 2000
    // this.interval = setInterval(() => {
    //   this.now = new Date();
    // }, this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['delay'].previousValue === changes['delay'].currentValue) {
      return;
    }

    console.log('ngOnChanges', this.delay); // le contenu du champ
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
