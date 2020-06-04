import { TestBed } from '@angular/core/testing';

import { TeaserServerListener } from './teaser-server-listener';

describe('TeaserServerListenerService', () => {
  let service: TeaserServerListener;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeaserServerListener);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
