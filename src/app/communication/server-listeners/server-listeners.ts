import { Injectable } from '@angular/core';
import { TeaserServerListener } from './teaser-server-listener';

@Injectable({
  providedIn: 'root'
})
export class ServerListeners {

  constructor(private teaserServerListener: TeaserServerListener) { }
}
