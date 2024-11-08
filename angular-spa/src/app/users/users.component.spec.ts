import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { of, Subject } from 'rxjs';
import { provideRouter } from '@angular/router';
import { User } from './user.model';
import { provideHttpClient } from '@angular/common/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        // {
        //   provide: UserService,
        //   useValue: {
        //     userAdded$: new Subject<User>(),
        //     getAll() {
        //       return of([{id: 1, name: 'toto'}])
        //     },
        //     getById() {
        //       return of({id: 1, name: 'toto'})
        //     }
        //   }
        // }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.autoDetectChanges(); // déclenche la détection de changement sur les callback async
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should display user from REST API', (done) => {
  //   setTimeout(() => {
  //     const hostEl = fixture.nativeElement as HTMLElement;
  //     expect(hostEl.textContent).toContain('Leanne Graham');
  //     done()
  //   }, 1000);
  // });

  it('should display user from REST API', async () => {
    await fixture.whenStable();

    const hostEl = fixture.nativeElement as HTMLElement;
    expect(hostEl.textContent).toContain('Leanne Graham');
  });
});
