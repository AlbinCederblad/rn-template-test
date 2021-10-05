/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
	Pressable,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	TouchableOpacity,
	useColorScheme,
	View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { ThemeProvider, Button, Text } from 'react-native-elements';
import counterSlice, { selectCount } from './features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { RootState, store } from './store/store';
import {
	increment,
	decrement,
	incrementByAmount,
} from './features/counter/counterSlice';
import { Provider } from 'react-redux';
import CounterScreen from './src/screens/CounterScreen';
import AnotherScreen from './src/screens/AnotherScreen';

// RN Elements Theme
const theme = {
	Button: {
		raised: true,
		containerStyle: {
			margin: 5,
		},
	},
};

// React Navigation
const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
	Counter: undefined;
	AnotherScreen: undefined;
};

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<ThemeProvider theme={theme}>
					<NavigationContainer>
						<StatusBar
							barStyle={isDarkMode ? 'light-content' : 'dark-content'}
						/>
						<Stack.Navigator initialRouteName="Counter">
							<Stack.Screen name="Counter" component={CounterScreen} />
							<Stack.Screen name="AnotherScreen" component={AnotherScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				</ThemeProvider>
			</SafeAreaProvider>
		</Provider>
	);
};

export const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
	button: {
		borderWidth: 1,
		borderColor: '#777',
		padding: 5,
		borderRadius: 5,
		margin: 5,
	},
});

export default App;
