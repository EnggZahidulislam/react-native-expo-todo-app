import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import BaseButton from '../../../components/BaseButton';
import BaseInput from '../../../components/BaseInput';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ITodo, ITodoProps } from '../models/todo.model';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../redux/todoSlice';

/**
 * * UpdateTodo Component
 * @param {ITodoProps} props
 * @returns
 */
const UpdateTodo = (props: ITodoProps) => {
	const dispatch = useDispatch();
	const [task, setTask] = useState(props.data.task);

	const handleUpdate = () => {
		const todo: ITodo = { ...props.data, task: task };
		dispatch(updateTodo(todo));
	};
	// Check if task is valid string;
	const isTaskValid = task.trim();
	return (
		<View style={styles.container}>
			<BaseInput placeholder="Write your todo.." value={task} onChangeText={setTask} />
			<BaseButton style={styles.addButton} disabled={!isTaskValid} onPress={handleUpdate}>
				<Ionicons name="checkmark-circle" size={30} color={isTaskValid ? 'green' : 'gray'} />
			</BaseButton>
		</View>
	);
};

export default UpdateTodo;

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
});
