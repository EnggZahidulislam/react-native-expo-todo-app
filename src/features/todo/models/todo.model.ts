export interface ITodo {
	id: string;
	isDone: boolean;
	task: string;
}
export interface ITodoProps {
	data: ITodo;
}

export interface ITodoListProps {
	data: ITodo[];
}

export const STORAGE_KEY = 'todos-state';