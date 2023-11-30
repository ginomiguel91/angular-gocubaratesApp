import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rates',
    loadChildren: () =>
      import('./rates/rates.module').then((m) => m.RatesModule),
  },

  {
    path: '**',
    redirectTo: 'rates',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
