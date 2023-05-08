export type TypeofObjectValues<T extends {}> = T[ keyof T ]

//NOTE: fron vuetify core

export type DataTableHeader = {
	key: string;
	value?: string;
	title: string;
	colspan?: number;
	rowspan?: number;
	fixed?: boolean;
	align?: 'start' | 'end';
	width?: number;
	minWidth?: string;
	maxWidth?: string;
	sortable?: boolean;
	sort?: ()=>{};
};
