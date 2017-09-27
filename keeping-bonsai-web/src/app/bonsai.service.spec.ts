import { TestBed, inject } from '@angular/core/testing';

import { BonsaiService } from './bonsai.service';

describe('BonsaiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BonsaiService]
    });
  });

  it('should be created', inject([BonsaiService], (service: BonsaiService) => {
    expect(service).toBeTruthy();
  }));
});
