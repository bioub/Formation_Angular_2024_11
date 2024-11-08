import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);

  getAll() {
    // Requete HTTP pour récupérer des users
    // GET https://jsonplaceholder.typicode.com/users
    return this.httpClient.get<User[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
