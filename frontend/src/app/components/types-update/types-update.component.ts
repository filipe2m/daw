import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  extension: string;
}

@Component({
  selector: 'app-types-update',
  templateUrl: './types-update.component.html',
  styleUrls: ['./types-update.component.css']
})
export class TypesUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TypesUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
