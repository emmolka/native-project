import React, { useState, useEffect } from 'react';
import { MainWrapper } from './styles';
import axios from 'axios';
import ComicsItem from '../../components/comics-item';
import {
	StyledFlatList,
	StyledSafeAreaView,
	StyledActivityIndicator,
	StyledItemsSeparator,
	ErrorMessage,
	ErrorWrapper
} from './styles';

const fetchComics = async (setItems, setIsLoading, setError) => {
	try {
		setIsLoading(true);
		const { data: { num: lastNumber } } = await axios.get('https://xkcd.com/info.0.json');

		const arr = [];

		for (let i = lastNumber; i >= lastNumber - 7; i--) {
			arr.push(`https://xkcd.com/${i}/info.0.json`);
		}

		const remainingData = await Promise.all(arr.map((item) => axios.get(item)));
		setItems([ ...remainingData.map((element) => element.data) ]);
	} catch (e) {
		console.log(e.message);
		setError(true);
	} finally {
		setIsLoading(false);
	}
};

const ComicsList = () => {
	const [ items, setItems ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	useEffect(() => {
		fetchComics(setItems, setIsLoading, setError);
	}, []);

	return (
		<MainWrapper>
			{isLoading && <StyledActivityIndicator size="large" />}
			{!isLoading &&
			error && (
				<ErrorWrapper>
					<ErrorMessage>Something went wrong try again later!</ErrorMessage>
				</ErrorWrapper>
			)}
			<StyledSafeAreaView>
				<StyledFlatList
					data={items}
					renderItem={({ item }) => <ComicsItem text={item.title} image={item.img} />}
					keyExtractor={(item) => item.num}
					ItemSeparatorComponent={() => <StyledItemsSeparator />}
				/>
			</StyledSafeAreaView>
		</MainWrapper>
	);
};

export default ComicsList;
