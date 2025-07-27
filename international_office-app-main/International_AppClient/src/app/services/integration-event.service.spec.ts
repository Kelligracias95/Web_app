import { TestBed } from '@angular/core/testing';

import { IntegrationEventService } from './integration-event.service';

describe('IntegrationEventService', () => {
  let service: IntegrationEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegrationEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
