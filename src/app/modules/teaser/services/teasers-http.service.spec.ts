import { TestBed } from '@angular/core/testing';

import { TeasersHttpService } from './teasers-http.service';

describe('TeasersHttpService', () => {
  let service: TeasersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeasersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
