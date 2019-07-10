import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginTop: 15,
    padding: 15,
    flexDirection: "row",
    flexWrap: 'wrap'
  },
})``;

export const Product = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  background-color: white;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 160px;
  border-radius: 15px;
`;

export const Image = styled.Image`
  height: 260px;
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
