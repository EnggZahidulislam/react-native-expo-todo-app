import { GestureResponderEvent, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';

interface IButtonProps {
	onPress?: (event: GestureResponderEvent) => void;
	style?: StyleProp<ViewStyle>;
	children: ReactNode;
	disabled?: boolean;
}

/**
 * * BaseButton Component
 * @param {IButtonProps} props
 * @returns TouchableOpacity
 */
const BaseButton = (props: IButtonProps) => {
	return (
		<TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress} disabled={props.disabled}>
			{props.children}
		</TouchableOpacity>
	);
};

export default BaseButton;

const styles = StyleSheet.create({
	button: {
		height: 30,
		width: 50,
		backgroundColor: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
});
