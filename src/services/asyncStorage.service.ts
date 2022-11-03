import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * *Store Data to AsyncStorage
 * @param key 
 * @param value 
 * @returns Promise
 */
export const storeToStorage = async (key: string, value: any) => {
	return await AsyncStorage.setItem(key, JSON.stringify(value));
};

/**
 * * Read data from AsyncStorage
 * @param {string} key 
 * @returns Promise
 */
export const readFromStorage = async (key: string) => {
	return await AsyncStorage.getItem(key);
};


/**
 * *Remove data from AsyncStorage
 * @param key 
 * @returns 
 */
export const deleteFromStorage = async (key: string) => {
	return await AsyncStorage.removeItem(key);
};
