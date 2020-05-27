import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ForumComponent } from './forum/forum.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    DashboardComponent,
    PdfViewerComponent,
    ForumComponent,
  ],
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,

    MatSidenavModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
