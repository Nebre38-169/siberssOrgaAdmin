import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guard/admin.guard';
import { BoquetteCreateComponent } from './boquette-create/boquette-create.component';
import { BoquetteEditPasswordComponent } from './boquette-edit-password/boquette-edit-password.component';
import { BoquetteEditComponent } from './boquette-edit/boquette-edit.component';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';

const routes: Routes = [
  {
    path: 'list',
    canActivate : [AdminGuard],
    component : BoquetteListComponent
  },
  {
    path : 'create',
    canActivate : [AdminGuard],
    component : BoquetteCreateComponent
  },
  {
    path : ':id',
    canActivate : [AdminGuard],
    component : BoquetteSinglePageComponent
  },
  {
    path : 'edit/:id',
    canActivate : [AdminGuard],
    component : BoquetteEditComponent
  },
  {
    path : 'password/:id',
    canActivate : [AdminGuard],
    component : BoquetteEditPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoquetteRoutingModule {}