import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatesRoutingModule } from '../rates/rates-routing.module';
@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RatesRoutingModule, FontAwesomeModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
