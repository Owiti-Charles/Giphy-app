import { TestBed } from '@angular/core/testing';

import { StickerServiceService } from './sticker-service.service';

describe('StickerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StickerServiceService = TestBed.get(StickerServiceService);
    expect(service).toBeTruthy();
  });
});
