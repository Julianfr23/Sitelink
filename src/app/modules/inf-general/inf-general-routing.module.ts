import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfGeneralPageComponent } from './pages/inf-general-page/inf-general-page.component';
import { PublicComponentComponent } from './components/public-component/public-component.component';
import { VisionComponentComponent } from './components/vision-component/vision-component.component';
import { ProtectionComponentComponent } from './components/protection-component/protection-component.component';
import { InstrumentComponentComponent } from './components/instrument-component/instrument-component.component';


const routes: Routes = [
  {
    path: '',
    component: InfGeneralPageComponent
  },
  {
    path: 'pdf1',
    component: PublicComponentComponent,
  },
  {
    path: 'pdf2',
    component: VisionComponentComponent,
  },
  {
    path: 'pdf3',
    component: ProtectionComponentComponent,
  },
  {
    path: 'pdf4',
    component: InstrumentComponentComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfGeneralRoutingModule { }
