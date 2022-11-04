import { NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputChangeEventData, TextInputFocusEventData, TextStyle, View, ViewStyle } from 'react-native';
import React from 'react';

interface ITextInputProps {
	style?: StyleProp<TextStyle>;
	placeholder?: string;
	textContentType?: any;
	onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
	onChangeText?: (text: string) => void;
	onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
	onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
	value?: string;
	testID?: string;
}

/**
 * * BaseInput Component
 * @param {ITextInputProps} props
 * @returns View
 */
const BaseInput = (props: ITextInputProps) => {
	return (
		<View>
			<TextInput
				testID={props.testID}
				textContentType={props.textContentType}
				placeholder={props.placeholder}
				style={[styles.input, props.style]}
				onChangeText={props.onChangeText}
				onBlur={props.onBlur}
				onChange={props.onChange}
				onFocus={props.onFocus}
				value={props.value}
			/>
		</View>
	);
};

export default BaseInput;

const styles = StyleSheet.create({
	input: {
		height: 40,
		minWidth: '50%',
	},
});
