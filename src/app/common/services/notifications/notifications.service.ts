import { Teaser } from 'src/app/model/teaser/teaser.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  public requestAddTeaserResult(result: boolean): void {
    console.log(`Add Teaser Result: ${result}`);
  }

  public teaserAdded(teaser: Teaser): void {
    console.log(`Teaser Added: ${teaser.title} by ${teaser.author}`);
  }
}
