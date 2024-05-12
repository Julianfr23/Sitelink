import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPageComponent } from './pages/pay-page/pay-page.component';

const routes: Routes = [
  {
    path: '',
    component: PayPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayRoutingModule { }
