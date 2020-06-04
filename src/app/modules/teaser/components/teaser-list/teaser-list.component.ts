import { ServerResponse } from './../../../../communication/server-response';
import { CompositeSubscription } from './../../../../common/composite-subscription';
import { SelectedTeaserNotifyingService } from './../../services/selected-teaser-notifying.service';
import { TeasersState } from './../../../../store/teaser/teaser.state';
import { Teaser } from './../../../../model/teaser/teaser.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Client } from '../../../../communication/client';

import * as fromTeaserStore from '../../../../store/teaser';
import { TeaserListFacade } from '../../model/teaser-list.facade';

@Component({
  selector: 'app-teaser-list',
  templateUrl: './teaser-list.component.html',
  styleUrls: ['./teaser-list.component.css']
})
export class TeaserListComponent implements OnInit {
  public teasers: Observable<Teaser[]> = this.facade.getTeaserList();
  public selectedTeaser: Teaser = null;
  public selectedOptions: Teaser[];

  constructor(private facade: TeaserListFacade) { }
  
  ngOnInit(): void {
    this.facade.loadTeasers();
  }

  public onSelectedTeaserChanged(): void {
    if (this.selectedOptions.length === 0) return;
    let selected = this.selectedOptions[0];
    if (selected.id == this.selectedTeaser?.id) return;
    this.selectedTeaser = selected;

    this.facade.selectedTeaserChanged(this.selectedTeaser);
  }
}
