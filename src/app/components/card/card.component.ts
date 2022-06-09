import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '../models/Dialog';
import * as messages from '../models/Dialog'
import { Column } from '../models/Column';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() isEditable: boolean = false;
  @Input() title: string = '';
  @Input() items: any[] = [];
  @Input() columns: Column[] = [];
  @Output() onCreate: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  createItem() {
    let data: Dialog = { 
      ...messages.createData,
      columns: this.columns,
      item: {}
    };
    const dialogRef = this.dialog.open(ConfirmComponent, { width: '400px', data: data });
    dialogRef.afterClosed().subscribe((item: any) => {
      if (item) this.onCreate.emit(item);
    });
  }
  deleteItem(id: string): void {
    this.onDelete.emit(id);
  }
  editItem(obj: any): void {
    this.onEdit.emit(obj);
  }

}
