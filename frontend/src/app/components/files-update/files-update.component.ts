import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Type } from '../../interfaces/type'
import { TypesService } from '../../services/types.service';

import { Category } from '../../interfaces/category'
import { CategoriesService } from '../../services/categories.service';

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
  types: Type[] = [];
  selectedType = this.data.type;

  categories: Category[] = [];
  selectedCategory = this.data.category;

  constructor(
    private dialogRef: MatDialogRef<FilesUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private typesService: TypesService,
    private categoriesService: CategoriesService
    ) { }

  ngOnInit(): void {
    this.getTypes();
    this.getCategories();
  }

  getTypes(): void {
    this.typesService.getTypes()
    .subscribe((types) => {
      this.types = types;
    });
  }

  getCategories(): void {
    this.categoriesService.getCategories()
    .subscribe((categories) => {
      this.categories = categories;
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
