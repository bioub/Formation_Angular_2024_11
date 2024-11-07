import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  standalone: true,
  imports: [],
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {
  user = {
    name: 'Romain',
    isActive: true,
    count: 0,
  };

  handleCounterClick() {
    this.user.count++;
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log(this.user);
  }
}
