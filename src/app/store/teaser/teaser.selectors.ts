import { TeasersState } from './teaser.state';
import * as fromCollection from './teaser.collection';
import { createSelector } from '@ngrx/store';
import * as featureSelectors from '../feature.selectors';

export const teaserIds = createSelector(
	featureSelectors.teaserListSelector,
	fromCollection.selectTeaserIds
);

export const allTeasers = createSelector(
	featureSelectors.teaserListSelector,
	fromCollection.selectAllTeasers
);

export const selectedTeaser = createSelector(
	featureSelectors.teaserListSelector,
	(state: TeasersState) => state.selectedTeaser
);

export const teaserPdf = createSelector(
	featureSelectors.teaserListSelector,
	(state: TeasersState) => state.selectedTeaserPdfFile
);