import { TestBed } from '@angular/core/testing';

import { ScategoriasService } from './scategorias.service';

describe('ScategoriasService', () => {
  let service: ScategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
