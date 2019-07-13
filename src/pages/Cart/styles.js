import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  background-color: lightgrey;
  flex: 1;
`;

export const CartItems = styled.ScrollView`
  padding: 15px;
`;

export const SubtotalWrapper = styled.View`
  background-color: white;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
`;

export const SubtotalText = styled.Text`
  font-size: 18px;
  color: gray;
`;

export const SubtotalValue = styled.Text`
  font-size: 24px;
  color: #60a9a6;
`;
