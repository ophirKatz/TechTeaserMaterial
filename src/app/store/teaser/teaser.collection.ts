import { Teaser } from './../../model/teaser/teaser.model';
import { TeasersState } from "./teaser.state";

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';


const adapter: EntityAdapter<Teaser> = createEntityAdapter<Teaser>();

export const initialState: TeasersState = adapter.getInitialState({
	selectedTeaser: null,

	serverResponses: {
		addTeaserResult: false
	}
});

//#region collection methods

export function onLoadComplete(state: TeasersState, payload: { teasers: Teaser[] }) {
	return adapter.setAll(payload.teasers, state);
}

export function onAddTeaserComplete(state: TeasersState, payload: {teaser: Teaser}) {
	return adapter.addOne(payload.teaser, state);
}

//#endregion

//#region selectors

export const selectTeaserIds = adapter.getSelectors().selectIds;
export const selectAllTeasers = adapter.getSelectors().selectAll;

//#endregion