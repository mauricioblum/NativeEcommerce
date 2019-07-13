import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Info = styled.View`
  flex-direction: column;
  max-width: 100px;
`;

export const Name = styled.Text`
  color: black;
  font-size: 12px;
`;

export const Brand = styled.Text`
  color: darkgray;
  font-size: 10px;
  opacity: 0.8;
`;

export const Price = styled.Text`
  color: green;
  font-size: 16px;
`;

export const Quantity = styled.TextInput.attrs({
  keyboardType: 'numeric',
})`
  width: 20px;
  border: 1px solid lightgray;
`;

export const Remove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
