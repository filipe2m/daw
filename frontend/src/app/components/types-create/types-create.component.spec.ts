import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesCreateComponent } from './types-create.component';

describe('TypesCreateComponent', () => {
  let component: TypesCreateComponent;
  let fixture: ComponentFixture<TypesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
