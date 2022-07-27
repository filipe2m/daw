import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { Type } from 'src/app/interfaces/type';
import { TypesService } from 'src/app/services/types.service';
import { TypesCreateComponent } from '../../components/types-create/types-create.component';
import { TypesUpdateComponent } from '../../components/types-update/types-update.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css'],
})
export class TypesComponent implements AfterViewInit {
  displayedColumns: string[] = ['line', 'name', 'extension', 'update'];
  ELEMENT_DATA:Type[] = [];
  dataSource:any;

  constructor(
    private typesService: TypesService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getTypes();
  }

  getTypes(): void {
    this.typesService.getTypes()
    .subscribe((types) => {
      this.ELEMENT_DATA = types;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(TypesCreateComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.create(result);
    });
  }

  openDialog(type: Type): void {
    const dialogRef = this.dialog.open(TypesUpdateComponent, {
      width: '250px',
      data: type,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.save(result);
    });
  }

  create(type: Type): void {
    if (type) {
      this.typesService.addType(type)
        .subscribe(() => {
          this.getTypes();
        });
      }
  }

  save(type: Type): void {
    if (type) {
      this.typesService.updateType(type)
        .subscribe(() => {
          this.getTypes();
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
