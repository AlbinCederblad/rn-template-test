import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { selectCount } from '../../features/counter/counterSlice';
import { useAppSelector } from '../../store/hooks';

interface Props {}

const AnotherScreen = (props: Props) => {
	const counter = useAppSelector(selectCount);

	return (
		<View>
			<Text h1>{counter}</Text>
		</View>
	);
};

export default AnotherScreen;
