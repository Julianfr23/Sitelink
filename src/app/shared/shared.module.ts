import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRoutingModule } from '../modules/home/home-routing.module';
import { UsRoutingModule } from '../modules/us/us-routing.module';
import { PayRoutingModule } from '../modules/pay/pay-routing.module';
import { ShopRoutingModule } from '../modules/shop/shop-routing.module';
import { InfGeneralRoutingModule } from '../modules/inf-general/inf-general-routing.module';
import { RegulationsRoutingModule } from '../modules/regulations/regulations-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    UsRoutingModule,
    PayRoutingModule,
    ShopRoutingModule,
    InfGeneralRoutingModule,
    RegulationsRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
