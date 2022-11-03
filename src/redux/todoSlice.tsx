import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ITodo, STORAGE_KEY } from '../features/todo/models/todo.model';
import { readFromStorage, storeToStorage } from '../services/asyncStorage.service';
interface IInitialState {
	todoList: ITodo[];
	selectedTodo?: ITodo;
	isAuthenticated: boolean;
}
/**
 * * Initializes the state of the App
 */
let initialState: IInitialState = { todoList: [], selectedTodo: undefined, isAuthenticated: false };

/**
 * * Creates a new 	todoSlice.
 */
export const todoSlice = createSlice({
	name: 'todos',
	initialState: initialState,
	reducers: {
		initState: (state, action) => {
			state.todoList = action.payload;
		},
		// After the Authentication update authentication state
		authenticateUser: (state, action) => {
			state.isAuthenticated = action.payload;
		},
		// Adding new todo;
		addTodo: (state, action) => {
			state.todoList = [...state.todoList, { id: new Date().getTime().toString(), task: action.payload.task.trim(), isDone: false }];
			storedInLocalStorage(state);
		},
		// delete todo from todoList;
		deleteTodo: (state, action) => {
			state.todoList = [...state.todoList.filter((todo) => todo.id != action.payload.id)];
			storedInLocalStorage(state);
		},
		// update todo
		updateTodo: (state, action) => {
			state.todoList = state.todoList.map((todo) => {
				if (todo.id === action.payload.id) {
					todo = action.payload;
				}
				return todo;
			});
			state.selectedTodo = undefined;
			storedInLocalStorage(state);
		},
		// Selected Todo for store in state
		selectTodo: (state, action) => {
			state.selectedTodo = action.payload;
		},
	},
});

/**
 * * Read todos from AsyncStorage
 * @returns Promise<ITodo[]>
 */
export const getTodosFromAsyncStorage = async (): Promise<ITodo[]> => {
	const result = await readFromStorage(STORAGE_KEY);
	return result ? JSON.parse(result) : [];
};

/**
 * * Store state in AsyncStorage
 * @param {IInitialState} state 
 */
const storedInLocalStorage = async (state: IInitialState) => {
	try {
		await storeToStorage(STORAGE_KEY, state.todoList);
	} catch (error) {
		console.log('## ~ file: todoSlice.tsx ~ line 49 ~ storedInLocalStorage ~ error', error);
	}
};

export const { initState, authenticateUser, addTodo, deleteTodo, updateTodo, selectTodo } = todoSlice.actions;

export default todoSlice.reducer;
