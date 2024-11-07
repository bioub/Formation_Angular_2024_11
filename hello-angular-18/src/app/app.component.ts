import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./components/hello/hello.component";
import { ClockComponent } from "./components/clock/clock.component";
import { MyFormComponent } from "./components/my-form/my-form.component";
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MultiStateButtonComponent } from './components/multi-state-button/multi-state-button.component';
import { SelectComponent } from "./components/select/select.component";
import { MyButtonComponent } from "./components/my-button/my-button.component";
import { MyCardComponent } from "./components/my-card/my-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ClockComponent, MyFormComponent, HelloWorldComponent, MultiStateButtonComponent, SelectComponent, MyButtonComponent, MyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Titi';

  format = 'HH:mm:ss';
  delay = 2000;
}
