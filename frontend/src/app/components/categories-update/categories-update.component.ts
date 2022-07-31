import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-types-update',
  templateUrl: './categories-update.component.html',
  styleUrls: ['./categories-update.component.css']
})
export class CategoriesUpdateComponent implements OnInit {
  icons: Array<string> = [
    'movie',
    'videocam',
    'flag',
    'link',
    'mail',
    'storage',
    'attachment',
    'folder',
    'computer',
    'camera',
    'collections',
  ];
  selectedIcon: string = this.data.icon;

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
