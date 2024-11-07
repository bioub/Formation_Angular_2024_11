import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { ClockComponent } from "./clock/clock.component";
import { MyFormComponent } from "./my-form/my-form.component";
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ClockComponent, MyFormComponent, HelloWorldComponent, MultiStateButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-angular-18';
}
