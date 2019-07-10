import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  background-color: white;
  padding: 15px 0px;
`;
export const Title = styled.Text`
  text-align: center;
  color: #f06292;
  font-size: 15px;
`;
