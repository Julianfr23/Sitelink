import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsRoutingModule } from './us-routing.module';
import { UsPageComponent } from './pages/us-page/us-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { BossComponentComponent } from './components/boss-component/boss-component.component';
import { TeamComponentComponent } from './components/team-component/team-component.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    UsPageComponent,
    MainComponentComponent,
    BossComponentComponent,
    TeamComponentComponent,
  ],
  imports: [
    CommonModule,
    UsRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class UsModule { }
