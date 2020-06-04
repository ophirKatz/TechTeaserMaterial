export interface AddNewTeaserData {
  title: string;
  author: string;
  tags: string[];
}

export function newDialogData() {
	return <AddNewTeaserData> {
		title: '',
		author: '',
		tags: []
	};
}