import React from 'react';
import { ITodo } from '../features/todo/models/todo.model';
import store from '../redux/store';
import { addTodo, deleteTodo, updateTodo } from '../redux/todoSlice';
const mockItems: any = {};

/**
 * * Mocks the async-storage
 */
jest.mock('@react-native-async-storage/async-storage', () => ({
	setItem: jest.fn((item, value) => {
		return new Promise((resolve, reject) => {
			mockItems[item] = value;
			resolve(value);
		});
	}),
	getItem: jest.fn((item) => {
		return new Promise((resolve, reject) => {
			resolve(mockItems[item]);
		});
	}),
}));

let task: ITodo = {
	id: new Date().getTime().toString(),
	task: 'Task 1',
	isDone: false,
};

describe('Home Screen', () => {
	it('Add Todo', () => {
		store.dispatch(addTodo(task));
		const state = store.getState().todos;
		expect(state.todoList.length).toEqual(1);
	});
	it('Update Todo', () => {
		store.dispatch(updateTodo(task));
		const state = store.getState().todos;
		expect(state.todoList.length).toEqual(1);
	});
	it('Delete Todo', () => {
		store.dispatch(deleteTodo(task.id));
		const state = store.getState().todos;
		expect(state.todoList.length).toEqual(0);
	});
});
