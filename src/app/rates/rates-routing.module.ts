import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RateDailyComponent } from './pages/rate-daily/rate-daily.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'formalDaily',
        component: RateDailyComponent,
      },

      {
        path: 'invertedFormalDaily',
        component: RateDailyComponent,
      },
      {
        path: 'informalDaily',
        component: RateDailyComponent,
      },
      {
        path: 'invertedInformalDaily',
        component: RateDailyComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatesRoutingModule {}
