import { Dayjs } from "dayjs";

export type TodoItem = {
	id: number;
	title?: string;
	desc?: string;
	createdDate?: Dayjs;
	isChecked?: boolean;
	isEdit?: boolean;
};
