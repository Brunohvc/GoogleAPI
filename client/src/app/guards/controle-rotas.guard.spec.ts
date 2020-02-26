import { TestBed } from '@angular/core/testing';

import { ControleRotasGuard } from './controle-rotas.guard';

describe('ControleRotasGuard', () => {
  let guard: ControleRotasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControleRotasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
