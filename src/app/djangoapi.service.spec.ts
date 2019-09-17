import { TestBed } from '@angular/core/testing';

import { DjangoapiService } from './djangoapi.service';

describe('DjangoapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DjangoapiService = TestBed.get(DjangoapiService);
    expect(service).toBeTruthy();
  });
});
