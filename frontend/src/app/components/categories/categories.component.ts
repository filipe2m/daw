import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriesCreateComponent } from '../../components/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from '../../components/categories-update/categories-update.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['line', 'name', 'icon', 'update'];
  ELEMENT_DATA:Category[] = [];
  dataSource:any;

  constructor(
    private categoriesService: CategoriesService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getCategorys();
  }

  getCategorys(): void {
    this.categoriesService.getCategories()
    .subscribe((categories) => {
      this.ELEMENT_DATA = categories;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(CategoriesCreateComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.create(result);
    });
  }

  openDialog(category: Category): void {
    const dialogRef = this.dialog.open(CategoriesUpdateComponent, {
      width: '250px',
      data: category,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.save(result);
    });
  }

  create(category: Category): void {
    if (category) {
      this.categoriesService.addCategory(category)
        .subscribe(() => {
          this.getCategorys();
        });
      }
  }

  save(category: Category): void {
    if (category) {
      this.categoriesService.updateCategory(category)
        .subscribe(() => {
          this.getCategorys();
        });
      }
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
