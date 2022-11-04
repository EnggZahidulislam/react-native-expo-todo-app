import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
import HomeStack from './HomeStack';
/**
 * * App Navigation Container
 */
const AppNav = () => {
	const isAuthenticated = useSelector((state: any) => state.todos.isAuthenticated);
	return (
		<SafeAreaProvider>
			<NavigationContainer>{isAuthenticated ? <HomeStack /> : <AuthStack />}</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default AppNav;
