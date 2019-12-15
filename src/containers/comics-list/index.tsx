import React, { useState, useEffect } from 'react';
import { MainWrapper } from './styles';
import axios from 'axios';
import ComicsItem from '../../components/comics-item';
import { StyledFlatList, StyledSafeAreaView } from './styles';

interface ComicsInterface {
  img: string;
  title: string;
  num: number;
}

const fetchComics = async (setItems: React.Dispatch<React.SetStateAction<ComicsInterface[]>>) => {
  try {
    const {
      data: { num: lastNumber },
    } = await axios.get('https://xkcd.com/info.0.json');

    const arr = [];

    for (let i = lastNumber; i >= lastNumber - 7; i--) {
      arr.push(`https://xkcd.com/${i}/info.0.json`);
    }

    const remainingData = await Promise.all(arr.map(item => axios.get(item)));

    setItems([...remainingData.map((element: any) => element.data)]);
  } catch (e) {
    console.log(e.message);
  }
};

const ComicsList = () => {
  const [items, setItems] = useState<ComicsInterface[]>([]);
  useEffect(() => {
    fetchComics(setItems);
  }, []);

  return (
    <MainWrapper>
      <StyledSafeAreaView>
        <StyledFlatList
          data={items}
          renderItem={({ item }: { item: ComicsInterface }) => <ComicsItem text={item.title} image={item.img} />}
          keyExtractor={(item: ComicsInterface) => item.num}
        />
      </StyledSafeAreaView>
    </MainWrapper>
  );
};

export default ComicsList;
