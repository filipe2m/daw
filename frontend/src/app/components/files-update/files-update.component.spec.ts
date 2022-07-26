import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUpdateComponent } from './files-update.component';

describe('FilesUpdateComponent', () => {
  let component: FilesUpdateComponent;
  let fixture: ComponentFixture<FilesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
