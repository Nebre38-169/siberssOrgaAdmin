import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSingleComponent } from './channel-single.component';

describe('ChannelSingleComponent', () => {
  let component: ChannelSingleComponent;
  let fixture: ComponentFixture<ChannelSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
