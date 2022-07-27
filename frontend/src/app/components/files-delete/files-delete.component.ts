import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  type: string;
  category: string;
}

@Component({
  selector: 'app-files-delete',
  templateUrl: './files-delete.component.html',
  styleUrls: ['./files-delete.component.css']
})
export class FilesDeleteComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FilesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit(): void {

  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
