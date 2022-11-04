import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/Home.screen';

const Stack = createNativeStackNavigator();
/**
 * * Home Navigation Stack for Authorized Users.
 * @returns
 */
const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeStack;
