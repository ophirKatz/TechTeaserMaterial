import { Teaser } from './../../model/teaser/teaser.model';

import { EntityState } from '@ngrx/entity';

export interface TeaserServerResponses {
	addTeaserResult: boolean;
}

export interface TeasersState extends EntityState<Teaser> {
	selectedTeaser: Teaser;

	serverResponses: TeaserServerResponses;
}