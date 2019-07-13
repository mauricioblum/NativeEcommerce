import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Name = styled.Text`
  color: black;
  font-size: 18px;
`;

export const Brand = styled.Text`
  color: darkgray;
  font-size: 16px;
  opacity: 0.8;
`;

export const Price = styled.Text`
  color: green;
  font-size: 22px;
`;

export const Quantity = styled.TextInput`
  width: 40px;
  border: 1px solid lightgray;
`;

export const Remove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
