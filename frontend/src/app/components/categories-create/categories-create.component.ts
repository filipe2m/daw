import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Category } from '../../interfaces/category'
import { CategoriesService } from '../../services/categories.service';

export interface DialogData {
  id: string;
  name: string;
  types: Array<string>;
}

@Component({
  selector: 'app-categories-create',
  templateUrl: './categories-create.component.html',
  styleUrls: ['./categories-create.component.css']
})
export class CategoriesCreateComponent implements OnInit {
  data:Category = { name: '', types:[]}


  constructor(
    private dialogRef: MatDialogRef<CategoriesCreateComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {

  }

  closeDialog(): void {
    this.dialogRef.close(this.data);
  }
}
