import { TestBed } from '@angular/core/testing';

import { ProdutoAdapterService } from './produto-adapter.service';

describe('ProdutoAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoAdapterService = TestBed.get(ProdutoAdapterService);
    expect(service).toBeTruthy();
  });
});
