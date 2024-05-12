import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ProductComponentComponent } from './components/product-component/product-component.component';
import { MatCardModule } from '@angular/material/card';
import { AntenaComponentComponent } from './components/antena-component/antena-component.component';
import { CameraComponentComponent } from './components/camera-component/camera-component.component';
import { RouterComponentComponent } from './components/router-component/router-component.component';
import { SwitchComponentComponent } from './components/switch-component/switch-component.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    ProductComponentComponent,
    AntenaComponentComponent,
    CameraComponentComponent,
    RouterComponentComponent,
    SwitchComponentComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class ShopModule { }
