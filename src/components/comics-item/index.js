import React from "react";
import { ItemWrapper, ItemText, ItemImage } from "./styles";

const ComicsItem = props => {
  console.log(props);
  return (
    <ItemWrapper>
      <ItemText> {props.text} </ItemText>
      <ItemImage source={{ uri: props.image }}></ItemImage>
    </ItemWrapper>
  );
};

export default ComicsItem;
