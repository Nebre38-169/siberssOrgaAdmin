import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotanceCreateComponent } from './rotance-create.component';

describe('RotanceCreateComponent', () => {
  let component: RotanceCreateComponent;
  let fixture: ComponentFixture<RotanceCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotanceCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotanceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
