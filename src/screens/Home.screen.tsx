import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from '../features/todo/components/TodoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTodo from '../features/todo/components/AddTodo';
import { useDispatch, useSelector } from 'react-redux';
import UpdateTodo from '../features/todo/components/UpdateTodo';
import { getTodosFromAsyncStorage, initState } from '../redux/todoSlice';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const todoList = useSelector((state: any) => state.todos.todoList);
	const selectedTodo = useSelector((state: any) => state.todos.selectedTodo);

	useEffect(() => {
		// Loading all todos from local storage and updating state using initState action
		const loadTodos = async () => {
			const todos = await getTodosFromAsyncStorage();
			dispatch(initState(todos));
		};
		loadTodos();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.headerText}>Todo List:</Text>
			<View style={styles.list}>
				<TodoList data={todoList} />
			</View>
			<View style={styles.footer}>{selectedTodo ? <UpdateTodo data={selectedTodo} /> : <AddTodo />}</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	headerText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	list: {
		flex: 8,
		marginBottom: 15,
	},
	footer: {
		display: 'flex',
		justifyContent: 'center',
		height: 60,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		elevation: 2,
		shadowColor: '#5c5c5c',
		borderRadius: 5,
	},
});
