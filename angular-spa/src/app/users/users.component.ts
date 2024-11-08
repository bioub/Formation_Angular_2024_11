import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[] = [];

  private userService = inject(UserService);
  private title = inject(Title);

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router,
  //   private activedRoute: ActivatedRoute,
  //   private title: Title
  // ) {}

  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.title.setTitle('Users');
    this.subscriptions.push(
      this.userService.getAll().subscribe((data) => {
        this.users = data;
      })
    );

    this.subscriptions.push(
      this.userService.userAdded$.asObservable().subscribe((newUser) => {
        this.users.push(newUser);
      })
    );
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
