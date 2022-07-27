import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDeleteComponent } from './files-delete.component';

describe('FilesDeleteComponent', () => {
  let component: FilesDeleteComponent;
  let fixture: ComponentFixture<FilesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
