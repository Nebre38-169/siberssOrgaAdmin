import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { RotanceCreateComponent } from './rotance-create/rotance-create.component';
import { RotanceEditComponent } from './rotance-edit/rotance-edit.component';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';

const routes: Routes = [
  {
    path : 'create/:boquette',
    canActivate : [AdminGuard],
    component : RotanceCreateComponent
  },
  {
    path : ':id',
    canActivate : [AdminGuard],
    component : RotanceSinglePageComponent
  },
  {
    path : 'edit/:boquette/:id',
    canActivate : [AdminGuard],
    component : RotanceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotanceRoutingModule {}