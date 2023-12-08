import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ADialogComponent } from './a-dialog/a-dialog.component';

@Component({
  selector: 'app-root',
  template: `
   <h2>TC Reproduction for AFNet</h2>
   <button (click)="onClickLoadDialog()">OPEN TC DIALOG</button>
  `,
  styles: []
})
export class AppComponent {  

  constructor(private dialog: MatDialog) { }

  async onClickLoadDialog() {
    this.dialog.open(ADialogComponent, {panelClass: 'dialog-style', width: '75vw', height: '75vh'});
  }
}