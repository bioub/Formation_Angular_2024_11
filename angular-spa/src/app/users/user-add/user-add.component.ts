import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss'
})
export class UserAddComponent implements OnInit {
  private userService = inject(UserService);

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('romain.bohdanowicz@formation.tech', [Validators.email]),
    phone: new FormControl('06 00 00 00 00', []),
    address: new FormGroup({
      city: new FormControl('Bordeaux', [Validators.required]),
      zipcode: new FormControl('33000', [Validators.maxLength(6)]),
    }),
  });

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    const user = this.userForm.value as User;

    this.userService.create(user).subscribe((newUser) => {
      this.userService.userAdded$.next(newUser);
    });
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((user) => {
      console.log(user);
    });
  }
}
