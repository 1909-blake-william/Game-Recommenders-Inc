import { TestBed } from '@angular/core/testing';

import { GameRecommendationService } from './game-recommendation.service';

describe('GameRecommendationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameRecommendationService = TestBed.get(GameRecommendationService);
    expect(service).toBeTruthy();
  });
});
