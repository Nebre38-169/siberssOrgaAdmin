import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ChannelEditComponent } from './channel-edit/channel-edit.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelSinglePageComponent } from './channel-single-page/channel-single-page.component';
import { ChannelSingleComponent } from './channel-single/channel-single.component';

const routes: Routes = [
  {
    path: 'list',
    component : ChannelListComponent
  },
  {
    path : 'create',
    component : ChannelCreateComponent
  },
  {
    path : ':id',
    component : ChannelSinglePageComponent
  },
  {
    path : 'edit/:id',
    component : ChannelEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule {}