import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'add',
        component: UserAddComponent,
      },
      {
        path: ':userId',
        component: UserDetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
