import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  types: Array<string>;
}

@Component({
  selector: 'app-types-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css']
})
export class CategoriesUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CategoriesUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
