import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Column } from '../models/Column';
import { Dialog } from '../models/Dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent {
  formGroup!: FormGroup;
  columns!: Column[];

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Dialog,
    private fb: FormBuilder,
  ) {
    this.columns = this.data.columns ?? [];
    if (this.data.columns && this.data.item) {
      this.formGroup = this.fb.group(
        this.data.columns.reduce((acc, column) => {
          if (column.key === 'id') {
            return {...acc, [column.key]: [this.data.item[column.key], []]}
          }
          if (!this.data.item[column.key]) {
            return { ...acc, [column.key]: [null, [Validators.required]] };
          }
          if (column.type === 'date') {
            return {
              ...acc,
              [column.key]: [
                new Date(this.data.item[column.key]).toISOString().substring(0, 10),
                [Validators.required],
              ],
            };
          }
          return { ...acc, [column.key]: [this.data.item[column.key], [Validators.required]] };
        }, {}),
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }
  confirm(): void {
    if (this.formGroup && this.formGroup?.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.dialogRef.close(this.formGroup ? this.formGroup.value : this.data.item);
  }
}
