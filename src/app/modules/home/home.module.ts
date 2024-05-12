import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlideComponentComponent } from './components/slide-component/slide-component.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { MatCardModule } from '@angular/material/card';
import { MapComponentComponent } from './components/map-component/map-component.component';
import { PlansComponentComponent } from './components/plans-component/plans-component.component';
import {MatIconModule} from '@angular/material/icon';
import { DudesComponentComponent } from './components/dudes-component/dudes-component.component';
import { AttentionComponentComponent } from './components/attention-component/attention-component.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SlideComponentComponent,
    CardComponentComponent,
    MapComponentComponent,
    PlansComponentComponent,
    DudesComponentComponent,
    AttentionComponentComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
