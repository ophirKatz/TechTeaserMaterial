import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { ForumComponent } from './components/forum/forum.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AddNewTeaserComponent } from './components/add-new-teaser/add-new-teaser.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PdfViewerComponent,
    ForumComponent,
    AddNewTeaserComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    NgxExtendedPdfViewerModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class DashboardModule { }
