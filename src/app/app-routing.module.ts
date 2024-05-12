import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsPageComponent } from './modules/us/pages/us-page/us-page.component';
import { ContractPageComponent } from './modules/contract/pages/contract-page/contract-page.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { PayPageComponent } from './modules/pay/pages/pay-page/pay-page.component';
import { RegulationsPageComponent } from './modules/regulations/pages/regulations-page/regulations-page.component';
import { InfGeneralPageComponent } from './modules/inf-general/pages/inf-general-page/inf-general-page.component';
import { ShopPageComponent } from './modules/shop/pages/shop-page/shop-page.component';

const routes: Routes = [ //TODO: router-outlet (Padre)

  {
    path: 'us',
    component: UsPageComponent,
    loadChildren: () => import(`../app/modules/us/us.module`).then(m => m.UsModule),
  },
  {
    path: 'contract',
    component: ContractPageComponent,
    loadChildren: () => import(`../app/modules/contract/contract.module`).then(m => m.ContractModule),
  },
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import(`../app/modules/home/home.module`).then(m => m.HomeModule),
  },
  {
    path: 'info',
    component: InfGeneralPageComponent,
    loadChildren: () => import(`../app/modules/inf-general/inf-general.module`).then(m => m.InfGeneralModule),
  },
  {
    path: 'pay',
    component: PayPageComponent,
    loadChildren: () => import(`../app/modules/pay/pay.module`).then(m => m.PayModule),
  },
  {
    path: 'regulations',
    component: RegulationsPageComponent,
    loadChildren: () => import(`../app/modules/regulations/regulations.module`).then(m => m.RegulationsModule),
  },
  {
    path: 'shop',
    component: ShopPageComponent,
    loadChildren: () => import(`../app/modules/shop/shop.module`).then(m => m.ShopModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
