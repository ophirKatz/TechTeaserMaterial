import { AddNewTeaserData } from './../../model/data/add-new-teaser.data';
import { Teaser } from 'src/app/model/teaser/teaser.model';
import { props, createAction } from '@ngrx/store';

export const noAction = createAction('[TeaserList] No Action');

export const loadTeasers = createAction('[TeaserList] Load Teasers');
export const loadTeasersComplete = createAction('[TeaserList] Load Teasers Complete', props<{ teasers: Teaser[] }>());
export const loadTeasersFailed = createAction('[TeaserList] Load Teasers Failed', props<{ error: string }>());

export const selectTeaser = createAction('[TeaserList] Select Teaser', props<{ teaser: Teaser }>());

export const fetchTeaserPdfComplete = createAction('[Teaser] Fetch Pdf Complete', props<{ file: string }>());
export const fetchTeaserPdfFailed = createAction('[Teaser] Fetch Pdf Failed', props<{ error: string }>());

export const requestAddTeaser = createAction('[Teaser] Request Add Teaser', props<{ teaserData: AddNewTeaserData }>());
export const teaserAdded = createAction('[Teaser] Teaser Added', props<{ teaser: Teaser }>());