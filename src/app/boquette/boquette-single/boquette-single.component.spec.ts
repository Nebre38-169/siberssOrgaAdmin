import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoquetteSingleComponent } from './boquette-single.component';

describe('BoquetteSingleComponent', () => {
  let component: BoquetteSingleComponent;
  let fixture: ComponentFixture<BoquetteSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoquetteSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoquetteSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
