import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { ChannelCreateComponent } from './channel-create/channel-create.component';
import { ChannelEditComponent } from './channel-edit/channel-edit.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelSinglePageComponent } from './channel-single-page/channel-single-page.component';
import { ChannelSingleComponent } from './channel-single/channel-single.component';

const routes: Routes = [
  {
    path: 'list',
    canActivate : [AdminGuard],
    component : ChannelListComponent
  },
  {
    path : 'create',
    canActivate : [AdminGuard],
    component : ChannelCreateComponent
  },
  {
    path : ':id',
    canActivate : [AdminGuard],
    component : ChannelSinglePageComponent
  },
  {
    path : 'edit/:id',
    canActivate : [AdminGuard],
    component : ChannelEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule {}