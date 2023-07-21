import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-tip-dialog',
  templateUrl: './tip-dialog.component.html',
})
export class TipDialogComponent {
  @Output() retake = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<TipDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onRetake(): void {
    this.dialogRef.close('retake');
    this.retake.emit();
  }
}
