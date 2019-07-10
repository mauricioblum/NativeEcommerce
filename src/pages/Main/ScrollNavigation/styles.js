import styled from 'styled-components/native';

export const ScrollContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})`
  background-color: #f06999;
`;

export const Category = styled.TouchableOpacity`
  margin: 0px 10px;
  padding: 15px 0px;
  z-index: 2;
`;

export const CategoryText = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  z-index: 5;
  height: 20px;
`;
