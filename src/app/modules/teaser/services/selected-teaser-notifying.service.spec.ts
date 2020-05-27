import { TestBed } from '@angular/core/testing';

import { SelectedTeaserNotifyingService } from './selected-teaser-notifying.service';

describe('SelectedTeaserNotifyingService', () => {
  let service: SelectedTeaserNotifyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedTeaserNotifyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
