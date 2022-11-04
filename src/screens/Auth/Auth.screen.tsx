import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BaseButton from '../../components/BaseButton';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../redux/todoSlice';

const AuthScreen = () => {
	const { navigate } = useNavigation();
	const dispatch = useDispatch();
	/**
	 * *Authenticate the user user Biometric Authentication or device Authentication;
	 */
	const handleLogin = async () => {
		const res = await LocalAuthentication.authenticateAsync();
		dispatch(authenticateUser(res.success));
		if (res.success) {
			navigate('HomeScreen');
		}
	};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Image resizeMode="contain" style={styles.headerImage} source={require('../assets/imgs/paidy-logo.png')} />
				<Text style={styles.headerText}>Todo</Text>
			</View>
			<BaseButton testID="loginButton" style={styles.loginButton} onPress={handleLogin}>
				<Text style={styles.buttonText}>Log In</Text>
			</BaseButton>
		</SafeAreaView>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 40,
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 40,
	},
	headerImage: {
		height: 60,
		width: 100,
	},
	headerText: {
		fontSize: 40,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#20479b',
	},
	buttonText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
	loginButton: {
		height: 50,
		width: '80%',
		backgroundColor: '#d33b8a',
	},
});
