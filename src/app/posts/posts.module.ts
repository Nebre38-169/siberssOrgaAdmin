import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './posts-single/posts-single.component';
import { PipeModule } from '../pipe/pipe.module';




@NgModule({
  declarations: [PostsSingleComponent],
  imports: [
    CommonModule,
    PipeModule.forRoot()
  ],
  exports : [
    PostsSingleComponent
  ]
})
export class PostsModule { }
