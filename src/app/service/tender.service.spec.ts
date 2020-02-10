import { TestBed } from '@angular/core/testing';

import { TenderRecommendationService } from './service/tender-recommendation.service';

describe('TenderRecommendationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenderRecommendationService = TestBed.get(TenderRecommendationService);
    expect(service).toBeTruthy();
  });
});
