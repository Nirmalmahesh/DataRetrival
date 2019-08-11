import { TestBed } from '@angular/core/testing';

import { FavorateService } from './favorate.service';

describe('FavorateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavorateService = TestBed.get(FavorateService);
    expect(service).toBeTruthy();
  });
});
