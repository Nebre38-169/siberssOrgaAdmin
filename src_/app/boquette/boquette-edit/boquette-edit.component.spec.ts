import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteEditComponent } from './boquette-edit.component';

describe('BoquetteEditComponent', () => {
  let component: BoquetteEditComponent;
  let fixture: ComponentFixture<BoquetteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
