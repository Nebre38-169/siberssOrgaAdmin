import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSingleComponent } from './posts-single.component';

describe('PostsSingleComponent', () => {
  let component: PostsSingleComponent;
  let fixture: ComponentFixture<PostsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
