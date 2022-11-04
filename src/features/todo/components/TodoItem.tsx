import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ITodo, ITodoProps } from '../models/todo.model';
import BaseButton from '../../../components/BaseButton';
import { useDispatch } from 'react-redux';
import { deleteTodo, selectTodo, updateTodo } from '../../../redux/todoSlice';

/**
 * * TodoItem Component
 * @param {ITodoProps} props
 * @returns
 */
const TodoItem = (props: ITodoProps) => {
	const dispatch = useDispatch();

	/**
	 * * Deleting Todo dispatching deleteTodo action.
	 */
	const handleDelete = () => {
		dispatch(deleteTodo(props.data.id));
	};

	/**
	 * * Check as Done Todo dispatching updateTodo action.
	 */
	const handleTodoDone = (res: boolean) => {
		const todo: ITodo = { ...props.data, isDone: res };
		dispatch(updateTodo(todo));
	};

	/**
	 * * Select Todo dispatching selectTodo action.
	 */
	const handleSelectedTodo = () => {
		dispatch(selectTodo(props.data));
	};

	return (
		<TouchableOpacity style={[styles.card, styles.elevation]} onPress={handleSelectedTodo}>
			<View style={styles.contentWrapper}>
				<Checkbox style={styles.checkbox} value={props.data.isDone} onValueChange={handleTodoDone} />
				<Text style={styles.taskText}>{props.data.task}</Text>
			</View>
			<BaseButton style={styles.deleteButton} onPress={handleDelete}>
				<Ionicons name="trash-bin" size={25} color="red" />
			</BaseButton>
		</TouchableOpacity>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	card: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'white',
		paddingHorizontal: 15,
		paddingVertical: 20,
		width: '100%',
		marginVertical: 5,
	},
	elevation: {
		elevation: 2,
		shadowColor: '#5c5c5c',
	},
	contentWrapper: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	checkbox: {
		marginRight: 10,
	},
	taskText: {
		flexShrink: 1,
		fontSize: 16,
	},
	deleteButton: {
		height: 26,
		width: 26,
	},
});
