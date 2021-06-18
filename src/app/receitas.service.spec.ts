import { TestBed } from '@angular/core/testing';

import { ReceitasService } from './receitas/receitas.service';

describe('ReceitasService', () => {
  let service: ReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
