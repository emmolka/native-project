import styled from 'styled-components';
import { SafeAreaView } from 'react-native';

export const MainWrapper = styled.View`flex: 1;`;

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

export const StyledFlatList = styled.FlatList`flex: 1;`;

export const StyledActivityIndicator = styled.ActivityIndicator`
	flex: 1;
	height: undefined;
	width: undefined;
`;
