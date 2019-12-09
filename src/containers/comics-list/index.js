import React from "react";
import { Text, SafeAreaView } from "react-native";
import { MainWrapper, HelloText } from "./styles";

const fetchComics = async () => {
  console.log("123");
};

const ComicsList = () => {
  useEffect(() => {
    fetchComics();
  }, []);

  return (
    <MainWrapper>
      <SafeAreaView>
        <HelloText>XKCD</HelloText>
      </SafeAreaView>
    </MainWrapper>
  );
};

export default ComicsList;
