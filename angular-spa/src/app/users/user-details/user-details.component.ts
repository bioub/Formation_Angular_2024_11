import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { map, Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  private userService = inject(UserService);
  private activatedRoute = inject(ActivatedRoute);

  user$!: Observable<User>;

  ngOnInit(): void {
    // Snapshot
    // const params = this.activatedRoute.snapshot.params;
    // console.log(params['userId']);

    // this.activatedRoute.params.subscribe((params) => {
    //   this.userService.getById(params['userId']).subscribe({
    //     next: (user) => {
    //       this.user = user;
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // });

    this.user$ = this.activatedRoute.params.pipe(
      map((params) => params['userId']),
      switchMap((userId) => this.userService.getById(userId))
    );
  }
}
