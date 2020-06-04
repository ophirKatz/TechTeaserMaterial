import { Model } from '../model';

export interface UserInfo extends Model {
	username: string;
	displayName: string;
	email: string;
}