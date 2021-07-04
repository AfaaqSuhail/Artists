import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable()
export class ErrorDialogService {
    public isDialogOpen: Boolean = false;
    constructor(public dialog: MatDialog) { }
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