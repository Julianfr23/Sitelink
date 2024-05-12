import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegulationsPageComponent } from './pages/regulations-page/regulations-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegulationsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegulationsRoutingModule { }
