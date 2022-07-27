import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { File } from 'src/app/interfaces/file';
import { FilesService } from 'src/app/services/files.service';
import { FilesCreateComponent } from '../../components/files-create/files-create.component';
import { FilesUpdateComponent } from '../../components/files-update/files-update.component';
import { FilesDeleteComponent } from '../../components/files-delete/files-delete.component';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements AfterViewInit {
  displayedColumns: string[] = ['line', 'name', 'type', 'category', 'update', 'delete'];
  ELEMENT_DATA:File[] = [];
  dataSource:any;

  constructor(
    private filesService: FilesService,
    private _liveAnnouncer: LiveAnnouncer,
    private dialog: MatDialog
  ) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.getFiles();
  }

  getFiles(): void {
    this.filesService.getFiles()
    .subscribe((files) => {
      this.ELEMENT_DATA = files;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(FilesCreateComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.create(result);
    });
  }

  openDialog(file: File): void {
    const dialogRef = this.dialog.open(FilesUpdateComponent, {
      width: '250px',
      data: file,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.save(result);
    });
  }

  openDialogDelete(file: File): void {
    const dialogRef = this.dialog.open(FilesDeleteComponent, {
      width: '250px',
      data: file
    });

    dialogRef.afterClosed().subscribe(result => {
      this.delete(result);
    });
  }

  create(file: File): void {
    if (file) {
      this.filesService.addFile(file)
        .subscribe(() => {
          this.getFiles();
        });
      }
  }

  save(file: File): void {
    if (file) {
      this.filesService.updateFile(file)
        .subscribe(() => {
          this.getFiles();
        });
      }
  }

  delete(file: File): void {
    if (file) {
      this.filesService.deleteFile(file.id!)
        .subscribe(() => {
          this.getFiles();
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
