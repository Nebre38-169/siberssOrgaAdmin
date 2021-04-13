import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteCreateComponent } from './boquette-create.component';

describe('BoquetteCreateComponent', () => {
  let component: BoquetteCreateComponent;
  let fixture: ComponentFixture<BoquetteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
