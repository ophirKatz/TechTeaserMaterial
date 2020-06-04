import { Subscription } from 'rxjs';

export class CompositeSubscription {
	subscriptions: Subscription[] = [];

	public register(subscription: Subscription): void {
		this.subscriptions.push(subscription);
	}

	public unsubscribe(): void {
		this.subscriptions.forEach(s => s.unsubscribe());
	}
}