import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { MainWrapper, HelloText } from "./styles";
import axios from "axios";
import ComicsItem from "../../components/comics-item";
import { StyledFlatList, StyledSafeAreaView } from "./styles";

const fetchComics = async setItems => {
  try {
    const {
      data: { num: lastNumber }
    } = await axios.get("https://xkcd.com/info.0.json");
    const arr = [];

    for (let i = lastNumber - 1; i >= lastNumber - 7; i--) {
      arr.push(`https://xkcd.com/${i}/info.0.json`);
    }
    // console.log(arr);
    const remainingData = await Promise.all(arr.map(item => axios.get(item)));
    // remainingData.map(element => console.log(element.data))
    setItems(remainingData.map(element => element.data));
    // console.log(remainingData);
  } catch {}
};

const ComicsList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchComics(setItems);
  }, []);

  // console.log(items)

  return (
    <MainWrapper>
      <StyledSafeAreaView>
        <HelloText> XKCD </HelloText>
        <StyledFlatList
          data={items}
          renderItem={({ item }) => (
            <ComicsItem text={item.title} image={item.img} />
          )}
          keyExtractor={item => item.num}
        />
      </StyledSafeAreaView>
    </MainWrapper>
  );
};

export default ComicsList;
