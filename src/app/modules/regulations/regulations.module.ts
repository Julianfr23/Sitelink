import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegulationsRoutingModule } from './regulations-routing.module';
import { RegulationsPageComponent } from './pages/regulations-page/regulations-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DocumentsComponent } from './components/documents/documents.component';


@NgModule({
  declarations: [
    RegulationsPageComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    RegulationsRoutingModule,
    SharedModule
  ]
})
export class RegulationsModule { }
