import { TestBed } from '@angular/core/testing';

import { EditDialogSService } from './edit-dialog-s.service';

describe('EditDialogSService', () => {
  let service: EditDialogSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDialogSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
