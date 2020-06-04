import { SelectedTeaserNotifyingService } from '../../../teaser/services/selected-teaser-notifying.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit, OnDestroy {
  public file: string = 'assets/1.pdf';
  public fileName: string = '1.pdf';

  constructor(private selectedTeaserNotifyingService: SelectedTeaserNotifyingService) { }

  ngOnInit(): void {
    this.subscription = this.selectedTeaserNotifyingService.subscribe(teaser => {
      if (!teaser) return;
      this.file = teaser.path;
      this.fileName = teaser.name;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;
}
