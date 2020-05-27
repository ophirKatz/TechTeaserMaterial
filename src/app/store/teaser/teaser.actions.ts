import { Teaser } from 'src/app/model/teaser/teaser.model';
import { props, createAction } from '@ngrx/store';

export const loadTeasers = createAction('[TeaserList] Load Teasers');
export const loadTeasersComplete = createAction('[TeaserList] Load Teasers Complete', props<{ teasers: Teaser[] }>());
export const loadTeasersFailed = createAction('[TeaserList] Load Teasers Failed', props<{ error: string }>());

export const selectTeaser = createAction('[TeaserList] Select Teaser', props<{ teaser: Teaser }>());

export const fetchTeaserPdfComplete = createAction('[Teaser] Fetch Pdf Complete', props<{ file: string }>());
export const fetchTeaserPdfFailed = createAction('[Teaser] Fetch Pdf Failed', props<{ error: string }>());