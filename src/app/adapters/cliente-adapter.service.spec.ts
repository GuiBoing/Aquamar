import { TestBed } from '@angular/core/testing';

import { ClienteAdapterService } from './cliente-adapter.service';

describe('ClienteAdapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteAdapterService = TestBed.get(ClienteAdapterService);
    expect(service).toBeTruthy();
  });
});
