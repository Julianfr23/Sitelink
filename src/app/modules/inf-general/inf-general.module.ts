import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfGeneralRoutingModule } from './inf-general-routing.module';
import { PublicComponentComponent } from './components/public-component/public-component.component';
import { InfGeneralPageComponent } from './pages/inf-general-page/inf-general-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VisionComponentComponent } from './components/vision-component/vision-component.component';
import { ProtectionComponentComponent } from './components/protection-component/protection-component.component';
import { InstrumentComponentComponent } from './components/instrument-component/instrument-component.component';


@NgModule({
  declarations: [
    InfGeneralPageComponent,
    PublicComponentComponent,
    VisionComponentComponent,
    ProtectionComponentComponent,
    InstrumentComponentComponent
  ],
  imports: [
    CommonModule,
    InfGeneralRoutingModule,
    SharedModule
  ],
  exports:[
    PublicComponentComponent,
    VisionComponentComponent
  ]
})
export class InfGeneralModule { }
