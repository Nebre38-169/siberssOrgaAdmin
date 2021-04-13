import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionModule } from './connexion/connexion.module';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : () => import('./connexion/connexion.module').then(m => m.ConnexionModule)
  },
  {
    path : 'boquette',
    loadChildren : () => import('./boquette/boquette.module').then(m => m.BoquetteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
