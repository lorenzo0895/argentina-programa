import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../confirm/confirm.component';
import { Dialog } from '../../models/Dialog';
import * as messages from '../../models/Dialog'

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {

  @Input() items!: any[];
  @Input() columns!: any[];
  @Input() isEditable: boolean = false;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  editItem(item: any): void {
    let data: Dialog = { 
      ...messages.editData,
      columns: this.columns,
      item: item
    };
    const dialogRef = this.dialog.open(ConfirmComponent, { width: '400px', data: data });
    dialogRef.afterClosed().subscribe((item: any) => {
      if (item) this.onEdit.emit(item);
    });
  }

  deleteItem(id: string) {
    let data: Dialog = { 
      ...messages.deleteData,
      item: id
    };
    const dialogRef = this.dialog.open(ConfirmComponent, { width: '400px', data: data });
    dialogRef.afterClosed().subscribe((item: any) => {
      if (item) this.onDelete.emit(item);
    });
  }

}
