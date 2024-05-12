import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayPageComponent } from './pages/pay-page/pay-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PayPageComponent
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    SharedModule
  ]
})
export class PayModule { }
