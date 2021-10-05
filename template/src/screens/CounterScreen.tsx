import React from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { RootStackParamList, styles } from '../../App';
import {
	decrement,
	increment,
	selectCount,
} from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Counter'>;

const CounterScreen = ({ route, navigation }: Props) => {
	// Two ways to select redux state
	const count = useAppSelector((state) => state.counter.value);
	const count2 = useAppSelector(selectCount);

	const dispatch = useAppDispatch();
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text h1>Counter: {count2}</Text>
			<Pressable
				style={({ pressed }) => [
					{ opacity: pressed ? 0.5 : 1.0, ...styles.button },
				]}
				onPress={() => {
					console.log('Pressed');
					dispatch(increment());
				}}
			>
				<View>
					<Text>Pressable Button - Increment</Text>
				</View>
			</Pressable>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					console.log('Pressed');
					dispatch(decrement());
				}}
			>
				<View>
					<Text>TouchableOpacity Button - Decrement</Text>
				</View>
			</TouchableOpacity>
			<Button
				title="React-Native-Elements Button - Go to AnotherScreen.tsx"
				onPress={() => {
					console.log('Pressed');
					navigation.navigate('AnotherScreen');
				}}
			/>
		</View>
	);
};

export default CounterScreen;
