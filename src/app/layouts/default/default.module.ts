import { DashboardModule } from './../../modules/dashboard/dashboard.module';
import { TeaserModule } from './../../modules/teaser/teaser.module';
import { SharedModule } from './../../modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardModule,
    SharedModule,
    TeaserModule,
    MatSidenavModule,
  ]
})
export class DefaultModule { }
