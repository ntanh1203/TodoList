import dayjs from "dayjs";
import { useState } from "react";
import TodoList from "./TodoList";
import { TodoItem } from "./type";

function Container() {
	const [todoList, setTodoList] = useState<Array<TodoItem>>([]);

	const [createValue, setCreateValue] = useState<Record<string, string>>({
		title: "",
		desc: "",
	});

	const handleChangeAdd = (fieldName: "title" | "desc", newValue: string) => {
		setCreateValue((prev) => ({ ...prev, [fieldName]: newValue }));
	};

	const handleAddNew = () => {
		const newElement = {
			id: todoList.length + 1,
			title: createValue.title,
			desc: createValue.desc,
			createdDate: dayjs(new Date()),
			isChecked: false,
			isEdit: false,
		};
		setTodoList((prev) => [...prev, newElement]);
		setCreateValue({ title: "", desc: "" });
	};

	const handleOnDelete = (option: TodoItem) => {
		const temp = todoList.filter((filter) => filter.id !== option.id);
		setTodoList(temp);
	};

	const handleOnChangeStatus = (
		option: TodoItem,
		fieldName: "isChecked" | "isEdit"
	) => {
		const temp = todoList.map((map) => {
			if (map.id === option.id) {
				return { ...map, [fieldName]: !map[fieldName] };
			}
			return map;
		});
		setTodoList(temp);
	};

	const handleOnUpdate = (
		option: TodoItem,
		fieldName: string,
		newValue: string
	) => {
		const temp = todoList.map((item) => {
			if (item.id === option.id) {
				return { ...item, [fieldName]: newValue };
			}
			return item;
		});
		setTodoList(temp);
	};

	return (
		<TodoList
			onUpdate={handleOnUpdate}
			onStatus={handleOnChangeStatus}
			onDelete={handleOnDelete}
			onCreate={handleAddNew}
			onChange={handleChangeAdd}
			todoList={todoList}
			createValue={createValue}
		/>
	);
}

export default Container;
