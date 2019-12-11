import { TestBed } from '@angular/core/testing';

import { GameRegistrationService } from './game-registration.service';

describe('GameRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameRegistrationService = TestBed.get(GameRegistrationService);
    expect(service).toBeTruthy();
  });
});
