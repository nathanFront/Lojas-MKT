import { TestBed } from '@angular/core/testing';

import { SolicitacaoServiceService } from './solicitacao-service.service';

describe('SolicitacaoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SolicitacaoServiceService = TestBed.get(SolicitacaoServiceService);
    expect(service).toBeTruthy();
  });
});
