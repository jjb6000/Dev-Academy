import { TestBed } from '@angular/core/testing';

import { FruitDataService } from './fruit-data.service';

describe('FruitDataService', () => {
  let service: FruitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FruitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
