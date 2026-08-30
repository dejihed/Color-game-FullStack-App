import { TestBed } from '@angular/core/testing';

import { ColorHistoryService } from './color-history.service';

describe('ColorHistoryService', () => {
  let service: ColorHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
