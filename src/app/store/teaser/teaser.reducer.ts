import { Teaser } from 'src/app/model/teaser/teaser.model';
import * as TeaserActions from './teaser.actions';

import * as fromCollection from './teaser.collection';
import { on, createReducer, Action } from '@ngrx/store';
import { TeasersState } from './teaser.state';

//#region Reducer Functions

function onSelectedTeaserChanged(state: TeasersState, payload: { teaser: Teaser }): TeasersState {
	return {
		...state,
		selectedTeaser: payload.teaser
	};
}

//#endregion

const teaserReducer = createReducer(
	fromCollection.initialState,
	on(TeaserActions.loadTeasersComplete, fromCollection.onLoadComplete),

	on(TeaserActions.selectTeaser, onSelectedTeaserChanged),

	on(TeaserActions.teaserAdded, fromCollection.onAddTeaserComplete),
);

export function reducer(state: TeasersState | undefined, action: Action): TeasersState {
  return teaserReducer(state, action);
}