import { SelectedTeaserNotifyingService } from './../services/selected-teaser-notifying.service';
import { TeasersState } from './../../../store/teaser/teaser.state';
import { Teaser } from './../../../model/teaser/teaser.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {TeaserActions, TeaserSelectors} from '../../../store/teaser';

@Injectable({
	providedIn: 'root'
})
export class TeaserListFacade {
	constructor(private store: Store<TeasersState>,
		private selectedTeaserNotifyingService: SelectedTeaserNotifyingService) {}

	public getTeaserList(): Observable<Teaser[]> {
		return this.store.select(TeaserSelectors.allTeasers);
	}

	public loadTeasers(): void {
		this.store.dispatch(TeaserActions.loadTeasers());
	}

	public selectedTeaserChanged(selectedTeaser: Teaser): void {
		this.selectedTeaserNotifyingService.selectedTeaserChanged(selectedTeaser);
	}
}