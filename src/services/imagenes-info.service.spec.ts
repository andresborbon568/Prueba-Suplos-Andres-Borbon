import { TestBed } from '@angular/core/testing';

import { ImagenesInfoService } from './imagenes-info.service';

describe('ImagenesInfoService', () => {
  let service: ImagenesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
