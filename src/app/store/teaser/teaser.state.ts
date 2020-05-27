import { Teaser } from './../../model/teaser/teaser.model';

import { EntityState } from '@ngrx/entity';

export interface TeasersState extends EntityState<Teaser> {
	selectedTeaser: Teaser;
	selectedTeaserPdfFile: string;
}