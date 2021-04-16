import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSinglePageComponent } from './channel-single-page.component';

describe('ChannelSinglePageComponent', () => {
  let component: ChannelSinglePageComponent;
  let fixture: ComponentFixture<ChannelSinglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSinglePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
