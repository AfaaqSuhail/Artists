import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

import { ErrorDialogService } from './error-dialog.service';

export class MatDialogMock {
    // When the component calls this.dialog.open(...) we'll return an object
    // with an afterClosed method that allows to subscribe to the dialog result observable.
    open() {
      return {
        afterClosed: () => of({action: true})
      };
    }
  }
  
describe('ErrorDialogService', () => {
  let service: ErrorDialogService;
  let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
    dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule],
            providers: [
                { provide: MatDialog, useClass: MatDialogMock },
                ErrorDialogService
            ]
        });
        service = TestBed.inject(ErrorDialogService);
    });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open modal ', () => {
    service.openDialog(ErrorDialogComponent);
});

});
