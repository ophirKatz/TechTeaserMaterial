import { TeaserEffects } from './teaser.effects';
import * as teaserActions from './teaser.actions';
import * as teaserSelectors from './teaser.selectors';

export * from './teaser.state';
export { reducer } from './teaser.reducer';
export * from './teaser.effects';
export const TeaserActions = teaserActions;
export const TeaserSelectors = teaserSelectors;

export const teaserEffects: any[] = [TeaserEffects];