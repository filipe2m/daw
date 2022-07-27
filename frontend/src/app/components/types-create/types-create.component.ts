import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Type } from '../../interfaces/type'
import { TypesService } from '../../services/types.service';

import { Category } from '../../interfaces/category'
import { CategoriesService } from '../../services/categories.service';

export interface DialogData {
  id: string;
  name: string;
  extension: string;
}

@Component({
  selector: 'app-types-create',
  templateUrl: './types-create.component.html',
  styleUrls: ['./types-create.component.css']
})
export class TypesCreateComponent implements OnInit {
  data:Type = { name: '', extension:''}


  constructor(
    private dialogRef: MatDialogRef<TypesCreateComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

  ngOnInit(): void {

  }

  closeDialog(): void {
    this.dialogRef.close(this.data);
  }
}
