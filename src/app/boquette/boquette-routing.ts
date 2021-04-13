import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoquetteCreateComponent } from './boquette-create/boquette-create.component';
import { BoquetteEditComponent } from './boquette-edit/boquette-edit.component';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';

const routes: Routes = [
  {
    path: 'list',
    component : BoquetteListComponent
  },
  {
    path : 'create',
    component : BoquetteCreateComponent
  },
  {
    path : ':id',
    component : BoquetteSinglePageComponent
  },
  {
    path : 'edit/:id',
    component : BoquetteEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoquetteRoutingModule {}