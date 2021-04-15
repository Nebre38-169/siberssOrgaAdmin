import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotanceCreateComponent } from './rotance-create/rotance-create.component';
import { RotanceEditComponent } from './rotance-edit/rotance-edit.component';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';

const routes: Routes = [
  {
    path : 'create/:boquette',
    component : RotanceCreateComponent
  },
  {
    path : ':id',
    component : RotanceSinglePageComponent
  },
  {
    path : 'edit/:boquette/:id',
    component : RotanceEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotanceRoutingModule {}