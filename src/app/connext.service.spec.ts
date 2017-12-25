import { TestBed, inject } from '@angular/core/testing';

import { ConnextService } from './connext.service';

describe('ConnextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnextService]
    });
  });

  it('should be created', inject([ConnextService], (service: ConnextService) => {
    expect(service).toBeTruthy();
  }));
});
