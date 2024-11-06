import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HelloPipe } from '../hello.pipe';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, HelloPipe],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name = 'Romain';
  now = new Date();

  hello() {
    return 'Hello ' + this.name;
  }
}
