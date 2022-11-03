import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';
import { ITodoListProps } from '../models/todo.model';

/**
 * * TodoList component
 * @param {ITodoListProps} props
 * @returns View;
 */
const TodoList = (props: ITodoListProps) => {
	return (
		<View>
			<FlatList
				style={styles.container}
				data={props.data}
				renderItem={(item: any) => {
					return <TodoItem data={item.item} />;
				}}
				keyExtractor={(item, index) => item.id}
			/>
		</View>
	);
};

export default TodoList;

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
});
