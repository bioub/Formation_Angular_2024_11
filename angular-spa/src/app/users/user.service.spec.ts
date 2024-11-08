import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
        // provideHttpClientTesting(),
        // {
        //   provide: HttpClient,
        //   useValue: {
        //     post() {
        //       return of({ id: 11, name: 'Toto' })
        //     }
        //   }
        // }
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
