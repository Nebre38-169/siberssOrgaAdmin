import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteListComponent } from './boquette-list.component';

describe('BoquetteListComponent', () => {
  let component: BoquetteListComponent;
  let fixture: ComponentFixture<BoquetteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
