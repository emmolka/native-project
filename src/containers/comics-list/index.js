import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { MainWrapper } from "./styles";
import axios from "axios";
import ComicsItem from "../../components/comics-item";
import { StyledFlatList, StyledSafeAreaView } from "./styles";

const fetchComics = async setItems => {
  try {
    const {
      data: { num: lastNumber }
    } = await axios.get("https://xkcd.com/info.0.json");

    const arr = [];

    for (let i = lastNumber; i >= lastNumber - 7; i--) {
      arr.push(`https://xkcd.com/${i}/info.0.json`);
    }

    const remainingData = await Promise.all(arr.map(item => axios.get(item)));

    setItems([...remainingData.map(element => element.data)]);
  } catch (e) {
    console.log(e.message);
  }
};

const ComicsList = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchComics(setItems);
  }, []);

  return (
    <MainWrapper>
      <StyledSafeAreaView>
        <StyledFlatList
          data={items}
          renderItem={({ item }) => (
            <ComicsItem text={item.title} image={item.img} />
          )}
          keyExtractor={item => item.num}
          onEndReached={() => console.log("Mati")}
        />
      </StyledSafeAreaView>
    </MainWrapper>
  );
};

export default ComicsList;
