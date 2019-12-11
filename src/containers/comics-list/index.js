import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { MainWrapper } from './styles';
import axios from 'axios';
import ComicsItem from '../../components/comics-item';
import { StyledFlatList, StyledSafeAreaView } from './styles';

const fetchComics = async (setItems, setDataLoaded) => {
	try {
		const { data: { num: lastNumber } } = await axios.get('https://xkcd.com/info.0.json');

		const arr = [];

		for (let i = lastNumber; i >= lastNumber - 7; i--) {
			arr.push(`https://xkcd.com/${i}/info.0.json`);
		}

		const remainingData = await Promise.all(arr.map((item) => axios.get(item)));

		setItems([ ...remainingData.map((element) => element.data) ]);
		setDataLoaded(true);
	} catch (e) {
		console.log(e.message);
	}
};

const ComicsList = () => {
	const [ items, setItems ] = useState([]);
	const [ dataLoaded, setDataLoaded ] = useState(false);
	useEffect(() => {
		fetchComics(setItems, setDataLoaded);
	}, []);

	return (
		<MainWrapper>
			{dataLoaded ? null : <ActivityIndicator size="large" />}
			<StyledSafeAreaView>
				<StyledFlatList
					data={items}
					renderItem={({ item }) => <ComicsItem text={item.title} image={item.img} />}
					keyExtractor={(item) => item.num}
				/>
			</StyledSafeAreaView>
		</MainWrapper>
	);
};

export default ComicsList;
