import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './posts-single/posts-single.component';



@NgModule({
  declarations: [PostsSingleComponent],
  imports: [
    CommonModule
  ],
  exports : [
    PostsSingleComponent
  ]
})
export class PostsModule { }
