import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractPageComponent } from './pages/contract-page/contract-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContractPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
