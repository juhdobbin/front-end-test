import { TestBed, inject } from '@angular/core/testing';

import { SkyoneService } from './skyone.service';

describe('SkyoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SkyoneService]
    });
  });

  it('should be created', inject([SkyoneService], (service: SkyoneService) => {
    expect(service).toBeTruthy();
  }));
});
