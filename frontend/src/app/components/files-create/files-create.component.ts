import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { File } from '../../interfaces/file'

import { Type } from '../../interfaces/type'
import { TypesService } from '../../services/types.service';

import { Category } from '../../interfaces/category'
import { CategoriesService } from '../../services/categories.service';
import { HttpClient } from '@angular/common/http';

export interface DialogData {
  id: string;
  name: string;
  type: string;
  category: string;
}

@Component({
  selector: 'app-files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.css']
})
export class FilesCreateComponent implements OnInit {
  data:File = { name: '', type:'', category: '', file: '' }

  types: Type[] = [];
  selectedType = this.data.type;

  categories: Category[] = [];
  selectedCategory = this.data.category;

  constructor(
    private dialogRef: MatDialogRef<FilesCreateComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
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

  onFileSelected(event: any) {
    const index = event.target.files[0].name.lastIndexOf('.');

    const file = { name: '', type: '' };
    file.name = event.target.files[0].name.slice(0, index);
    file.type = event.target.files[0].name.slice(index + 1).toUpperCase();

    this.data.name = file.name;
    this.data.type = file.type;

    this.data.file = event.target.files[0];
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitDialog(): void {
    const formData: FormData = new FormData();
    formData.append('name', this.data.name);
    formData.append('type', this.data.type);
    formData.append('category', this.data.category);
    formData.append('file', this.data.file, this.data.file.name!);
    this.dialogRef.close(formData);
  }
}
