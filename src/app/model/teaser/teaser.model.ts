import { Model } from '../model';

export interface Teaser extends Model {
	title: string;
	author: string;
	tags: string[];
	path: string;
	createdAt: Date;
}