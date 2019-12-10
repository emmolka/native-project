import React from 'react';
import { ItemWrapper, ItemText, ItemImage } from './styles';
import { Actions } from 'react-native-router-flux';

interface ComicsItemProps {
  image: string;
  text: string;
}

const goToDetail = (image: string) => {
  Actions.comicsDetail({ img: image });
};

const ComicsItem = (props: ComicsItemProps) => {
  return (
    <ItemWrapper onPress={() => goToDetail(props.image)}>
      <ItemText> {props.text} </ItemText>
      <ItemImage source={{ uri: props.image }}></ItemImage>
    </ItemWrapper>
  );
};

export default ComicsItem;
