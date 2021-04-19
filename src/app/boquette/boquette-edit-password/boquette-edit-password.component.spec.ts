import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteEditPasswordComponent } from './boquette-edit-password.component';

describe('BoquetteEditPasswordComponent', () => {
  let component: BoquetteEditPasswordComponent;
  let fixture: ComponentFixture<BoquetteEditPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteEditPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
