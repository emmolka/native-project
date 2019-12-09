import React from "react";
import { ItemWrapper, ItemText, ItemImage } from "./styles";

const ComicsItem = props => {
  return (
    <ItemWrapper>
      <ItemText>props.text</ItemText>
      <ItemImage>props.image</ItemImage>
    </ItemWrapper>
  );
};

export default ComicsList;
