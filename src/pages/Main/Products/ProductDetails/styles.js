import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Content = styled.View`
  background-color: lightgrey;
  padding: 15px;
  height: 100%;
`;

export const Product = styled.View`
  background-color: white;
  border-radius: 15px;
  padding: 10px;
`;

export const Image = styled.Image`
  height: 350px;
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

export const CartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background-color: #60a9a6;
  padding: 15px 5px;
  border-radius: 5px;
`;

export const CartButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const HeaderText = styled.Text`
  color: #f06999;
  font-weight: bold;
`;
