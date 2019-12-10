import React from "react";
import { ItemWrapper, ItemText, ItemImage } from "./styles";
import { Actions } from "react-native-router-flux";

const goToDetail = image => {
  Actions.comicsDetail(image);
};

const ComicsItem = props => {
  console.log(props);
  return (
    <ItemWrapper onPress={() => goToDetail({ img: props.image })}>
      <ItemText> {props.text} </ItemText>
      <ItemImage source={{ uri: props.image }}></ItemImage>
    </ItemWrapper>
  );
};

export default ComicsItem;
