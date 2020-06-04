import { SelectedTeaserNotifyingService } from './../../services/selected-teaser-notifying.service';
import { TeasersState } from './../../../../store/teaser/teaser.state';
import { Teaser } from './../../../../model/teaser/teaser.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromTeaserStore from '../../../../store/teaser';

@Component({
  selector: 'app-teaser-list',
  templateUrl: './teaser-list.component.html',
  styleUrls: ['./teaser-list.component.css']
})
export class TeaserListComponent implements OnInit {
  public teasers: Observable<Teaser[]> = this.store.select(fromTeaserStore.TeaserSelectors.allTeasers);
  public selectedTeaser: Teaser = null;
  public selectedOptions: Teaser[];

  constructor(private store: Store<TeasersState>,
    private selectedTeaserNotifyingService: SelectedTeaserNotifyingService) { }

  ngOnInit(): void {
    this.store.dispatch(fromTeaserStore.TeaserActions.loadTeasers());
  }

  public onSelectedTeaserChanged(): void {
    if (this.selectedOptions.length === 0) return;
    let selected = this.selectedOptions[0];
    if (selected.id == this.selectedTeaser?.id) return;
    this.selectedTeaser = selected;
    console.log(this.selectedTeaser);
    this.selectedTeaserNotifyingService.selectedTeaserChanged(this.selectedTeaser);
  }
}
