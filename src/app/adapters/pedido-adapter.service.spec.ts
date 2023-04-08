import { TestBed } from '@angular/core/testing';

import { PedidoAdapterService } from './pedido-adapter.service';

describe('PedidoAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PedidoAdapterService = TestBed.get(PedidoAdapterService);
    expect(service).toBeTruthy();
  });
});
