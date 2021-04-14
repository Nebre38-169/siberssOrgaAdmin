import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotanceEditComponent } from './rotance-edit.component';

describe('RotanceEditComponent', () => {
  let component: RotanceEditComponent;
  let fixture: ComponentFixture<RotanceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotanceEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotanceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
