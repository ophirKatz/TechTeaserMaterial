import { NotificationsService } from './../../common/services/notifications/notifications.service';
import { AddNewTeaserData } from './../../model/data/add-new-teaser.data';
import { TeasersHttpService } from './../../modules/teaser/services/teasers-http.service';
import { Teaser } from 'src/app/model/teaser/teaser.model';
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as teaserActions from './teaser.actions';

import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class TeaserEffects {
	constructor(private actions$: Actions,
		private teaserService: TeasersHttpService,
		private notificationService: NotificationsService) {}

	public loadTeasers$ = createEffect(() => this.actions$.pipe(
		ofType(teaserActions.loadTeasers),
		switchMap(() => {
			// TODO : Check in store if data is loaded. If so, dont reload from service.
			return this.teaserService.fetchTeasers().pipe(
				map((teasers: Teaser[]) => teaserActions.loadTeasersComplete({teasers})),
				catchError(error => of(teaserActions.loadTeasersFailed({error})))
			);
		})
	));

	public getTeaserPdf$ = createEffect(() => this.actions$.pipe(
		ofType(teaserActions.selectTeaser),
		switchMap((payload: { teaser: Teaser}) => {
			let pdfPath = payload.teaser.path;
			return this.teaserService.getTeaserPdf(pdfPath).pipe(
				map((file: string) => teaserActions.fetchTeaserPdfComplete({file: file})),
			 	catchError(error => of(teaserActions.fetchTeaserPdfFailed({error})))
			);
		})
	));

	public addTeaserAsync$ = createEffect(() => this.actions$.pipe(
		ofType(teaserActions.requestAddTeaser),
		switchMap((payload: { teaserData: AddNewTeaserData}) => {
			return this.teaserService.addTeaser(payload.teaserData).pipe(
				tap((result: boolean) => {
					this.notificationService.requestAddTeaserResult(result);
				}),
				map((result: boolean) => teaserActions.noAction())
			);
		})
	));
}