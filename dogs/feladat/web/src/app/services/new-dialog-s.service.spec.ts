import { TestBed } from '@angular/core/testing';

import { NewDialogSService } from './new-dialog-s.service';

describe('NewDialogSService', () => {
  let service: NewDialogSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewDialogSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
