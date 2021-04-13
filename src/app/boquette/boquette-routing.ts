import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';

const routes: Routes = [
  {
    path: 'list',
    component : BoquetteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoquetteRoutingModule {}