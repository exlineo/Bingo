import { TestBed, inject } from '@angular/core/testing';

import { BingoService } from './bingo.service';

describe('Bingo.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BingoService]
    });
  });

  it('should be created', inject([BingoService], (service: BingoService) => {
    expect(service).toBeTruthy();
  }));
});
