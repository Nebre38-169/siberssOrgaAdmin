import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotanceSingleComponent } from './rotance-single.component';

describe('RotanceSingleComponent', () => {
  let component: RotanceSingleComponent;
  let fixture: ComponentFixture<RotanceSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotanceSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotanceSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
