import React from 'react';
import { MainWrapper, Image } from './styles';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ComicsDetails = (props: Props) => {
  const image = props.navigation.getParam('img');

  return (
    <MainWrapper>
      <Image source={{ uri: image }} resizeMode="contain" />
    </MainWrapper>
  );
};

export default ComicsDetails;
