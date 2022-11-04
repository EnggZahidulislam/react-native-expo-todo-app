import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import BaseButton from '../../../components/BaseButton';
import BaseInput from '../../../components/BaseInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { addTodo } from '../../../redux/todoSlice';
import { useDispatch } from 'react-redux';
import { ITodo } from '../models/todo.model';

/**
 * * AddTodo Component
 * @returns View
 */
const AddTodo = () => {
	const dispatch = useDispatch();
	const [task, setTask] = useState<string>('');

	/**
	 * * Add new Todo dispatching addTodo action.
	 */
	const handleAddTodo = () => {
		const data: ITodo = {
			id: new Date().getTime().toString(),
			task: task.trim(),
			isDone: false,
		};
		dispatch(addTodo(data));
		setTask('');
	};

	const isTaskValid = task.trim();
	return (
		<View style={styles.container}>
			<BaseInput testID="taskInput" style={styles.taskInput} placeholder="Write your todo.." value={task} onChangeText={setTask} />
			<BaseButton testID="taskAddButton" style={styles.addButton} disabled={!isTaskValid} onPress={handleAddTodo}>
				<Ionicons name="checkmark-circle" size={30} color={isTaskValid ? 'green' : 'gray'} />
			</BaseButton>
		</View>
	);
};

export default AddTodo;

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	addButton: {
		height: 30,
		width: 30,
	},
	taskInput: {
		height: 50,
		minWidth: '90%',
		fontSize: 16,
	},
});
