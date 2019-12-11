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

export const StyledItemsSeparator = styled.View`
	border-bottom-color: ${(props) => props.theme.color.grey};
	border-bottom-width: 1px;
`;

export const ErrorMessage = styled.Text`font-size: 20px;`;

export const ErrorWrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
