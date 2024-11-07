import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { ClockComponent } from "./clock/clock.component";
import { MyFormComponent } from "./my-form/my-form.component";
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { SelectComponent } from "./select/select.component";
import { MyButtonComponent } from "./my-button/my-button.component";
import { MyCardComponent } from "./my-card/my-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ClockComponent, MyFormComponent, HelloWorldComponent, MultiStateButtonComponent, SelectComponent, MyButtonComponent, MyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'Titi';
}
