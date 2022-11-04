import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/Auth/Auth.screen';
import HomeScreen from '../screens/Home/Home.screen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator initialRouteName="AuthScreen" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="AuthScreen" component={AuthScreen} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default AuthStack;
