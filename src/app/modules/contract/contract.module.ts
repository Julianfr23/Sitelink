import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractPageComponent } from './pages/contract-page/contract-page.component';


@NgModule({
  declarations: [
    ContractPageComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule
  ]
})
export class ContractModule { }
