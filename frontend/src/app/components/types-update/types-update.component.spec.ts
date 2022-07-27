import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesUpdateComponent } from './types-update.component';

describe('TypesUpdateComponent', () => {
  let component: TypesUpdateComponent;
  let fixture: ComponentFixture<TypesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
