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
  });

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    // TODO
    // Envoyer la requete POST
    const user = this.userForm.value as User;

    this.userService.userAdded$.next({
      id: 11,
      ...user,
    });
  }

  ngOnInit(): void {
    this.userForm.valueChanges.subscribe((user) => {
      console.log(user);
    });
  }
}
