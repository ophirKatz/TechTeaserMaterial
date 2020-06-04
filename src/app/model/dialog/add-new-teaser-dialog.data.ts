export interface AddNewTeaserDialogData {
  title: string;
  author: string;
  tags: string[];
}

export function newDialogData() {
	return <AddNewTeaserDialogData> {
		title: '',
		author: '',
		tags: []
	};
}