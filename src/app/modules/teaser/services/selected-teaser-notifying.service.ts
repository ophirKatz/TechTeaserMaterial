import { TeasersState } from './../../../store/teaser/teaser.state';
import { Teaser } from './../../../model/teaser/teaser.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import {TeaserSelectors, TeaserActions} from '../../../store/teaser';

@Injectable({
  providedIn: 'root'
})
export class SelectedTeaserNotifyingService {
  public selectedTeaser: BehaviorSubject<Teaser>;

  constructor(private store: Store<TeasersState>) {
    this.selectedTeaser = new BehaviorSubject<Teaser>(null);
    this.store.select(TeaserSelectors.selectedTeaser).subscribe(t => this.selectedTeaser.next(t));
  }

  public subscribe(listener: SelectedTeaserChangedListener): Subscription {
    return this.selectedTeaser.subscribe(listener);
  }

  public selectedTeaserChanged(teaser: Teaser): void {
    this.store.dispatch(TeaserActions.selectTeaser({teaser: teaser}));
    this.selectedTeaser.next(teaser);
  }
}

export type SelectedTeaserChangedListener = (teaser: Teaser) => void;