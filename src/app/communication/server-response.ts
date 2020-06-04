export interface ServerResponse<T> {
	result: boolean;
	data: T | null;
	error: string;
}