import { Model } from '../model';

export interface Teaser extends Model {
	name: string;
	author: string;
	tags: string[];
	path: string;
	createdAt: Date;
}