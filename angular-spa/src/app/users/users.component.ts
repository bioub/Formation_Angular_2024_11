import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  private httpClient = inject(HttpClient);

  // constructor(
  //   private httpClient: HttpClient,
  //   private router: Router,
  //   private activedRoute: ActivatedRoute,
  //   private title: Title
  // ) {}

  ngOnInit(): void {
    // Requete HTTP pour récupérer des users
    // GET https://jsonplaceholder.typicode.com/users
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.users = data;
      });
  }
}
