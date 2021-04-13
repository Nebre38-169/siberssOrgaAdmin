import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteSinglePageComponent } from './boquette-single-page.component';

describe('BoquetteSinglePageComponent', () => {
  let component: BoquetteSinglePageComponent;
  let fixture: ComponentFixture<BoquetteSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
