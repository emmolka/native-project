import React from 'react';
import { MainWrapper, Image } from './styles';
import { Text } from 'react-native';

const ComicsDetails = (props) => {
	const image = props.navigation.getParam('img');

	return (
		<MainWrapper>
			<Image source={{ uri: image }} resizeMode="contain" />
		</MainWrapper>
	);
};

export default ComicsDetails;
