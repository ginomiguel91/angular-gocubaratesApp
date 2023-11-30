import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';
import { RateDailyComponent } from './pages/rate-daily/rate-daily.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardResponseComponent } from './card-response/card-response.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RateDailyComponent, CardResponseComponent, HomeComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RatesRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [CardResponseComponent],
})
export class RatesModule {}
