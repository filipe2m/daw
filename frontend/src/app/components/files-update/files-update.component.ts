import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  type: string;
  category: string;
}

@Component({
  selector: 'app-files-update',
  templateUrl: './files-update.component.html',
  styleUrls: ['./files-update.component.css']
})
export class FilesUpdateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FilesUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
