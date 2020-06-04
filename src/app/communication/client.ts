import { Teaser } from '../model/teaser/teaser.model';
import { Subject } from 'rxjs';
import { ServerResponse } from './server-response';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class Client {
	teaserAdded: Subject<ServerResponse<Teaser>> = new Subject<ServerResponse<Teaser>>();

	constructor() {
		let t = <Teaser> {
			id: 1,
			title: 'DFS',
			author: 'Ophir Katz',
			tags: [],
			path: 'assets/1.pdf',
			createdAt: new Date(),
		};
		let r = <ServerResponse<Teaser>>{data: t, result: true};
		setInterval(() => this.teaserAdded.next(r), 4000);
	}
}