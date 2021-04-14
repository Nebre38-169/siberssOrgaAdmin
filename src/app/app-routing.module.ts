import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : () => import('./connexion/connexion.module').then(m => m.ConnexionModule)
  },
  {
    path : 'boquette',
    loadChildren : () => import('./boquette/boquette.module').then(m => m.BoquetteModule)
  },
  {
    path : 'rotance',
    loadChildren : () => import('./rotance/rotance.module').then(m => m.RotanceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
