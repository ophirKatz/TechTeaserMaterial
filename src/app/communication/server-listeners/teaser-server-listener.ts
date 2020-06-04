import { Teaser } from 'src/app/model/teaser/teaser.model';
import { CompositeSubscription } from './../../common/composite-subscription';
import { Injectable } from '@angular/core';
import { Client } from '../client';
import { ServerResponse } from '../server-response';
import { NotificationsService } from 'src/app/common/services/notifications/notifications.service';
import { Store } from '@ngrx/store';
import { TeasersState } from 'src/app/store/teaser';

import { TeaserActions } from '../../store/teaser';

@Injectable({
  providedIn: 'root'
})
export class TeaserServerListener {

  constructor(private client: Client,
    private notificationService: NotificationsService,
    private store: Store<TeasersState>) {
    this.subscribeToServerEvents();
  }

  private subscribeToServerEvents(): void {
    this.subscriptions.register(
      this.client.teaserAdded.subscribe(this.onTeaserAdded)
    );
  }

  private onTeaserAdded(serverResponse: ServerResponse<Teaser>): void {
    if (!serverResponse.result) {
      console.log('Error onTeaserAdded');
      return;
    }

    let addedTeaser = serverResponse.data;
    this.store.dispatch(TeaserActions.teaserAdded({teaser: addedTeaser}));
    this.notificationService.teaserAdded(addedTeaser);
  }

  private subscriptions: CompositeSubscription = new CompositeSubscription();
}
