import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }

    /**
        * To open Dialog
        * @param {object} data
    */
    openDialog(data): any {
        if (this.isDialogOpen) {
            return false;
        }
        this.isDialogOpen = true;
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '500px',
            data: data
        });

        setTimeout(() => {
          dialogRef.close();
        },3000)

        dialogRef.afterClosed().subscribe(() => this.isDialogOpen = false);
    }
}