import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelSingleComponent } from './channel-single/channel-single.component';
import { ChannelSinglePageComponent } from './channel-single-page/channel-single-page.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ChannelEditComponent } from './channel-edit/channel-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../_modal';
import { ChannelRoutingModule } from './channel-routing';
import { PostsModule } from '../posts/posts.module';



@NgModule({
  declarations: [
    ChannelSingleComponent, 
    ChannelSinglePageComponent, 
    ChannelListComponent, 
    ChannelCreateComponent, 
    ChannelEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    PostsModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
