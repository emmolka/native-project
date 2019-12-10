import styled from "styled-components";
export const ItemWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
`;

export const ItemText = styled.Text`
  color: black;
  font-size: 16px;
  max-width: 80%;
  flex: 2;
`;

export const ItemImage = styled.Image`
  height: 100px;
  width: 100px;
  flex: 1;
`;
