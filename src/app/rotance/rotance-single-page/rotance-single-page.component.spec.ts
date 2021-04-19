import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotanceSinglePageComponent } from './rotance-single-page.component';

describe('RotanceSinglePageComponent', () => {
  let component: RotanceSinglePageComponent;
  let fixture: ComponentFixture<RotanceSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotanceSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotanceSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
