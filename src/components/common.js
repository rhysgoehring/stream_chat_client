import styled from "styled-components/native";
import {
  widthPercentage as wp,
  heightPercentage as hp
} from "../styles/dimensions";

const FlexScreenContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${hp("100%")};
  width: ${wp("100%")};
`;

const StyledText = styled.Text`
  font-family: "Raleway-Regular";
  color: #000;
  font-size: ${hp("3.0%")};
  margin-top: ${({ marginTop }) => marginTop || 0};
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  text-align: center;
`;

const HeaderText = styled(StyledText)`
  font-size: ${hp("7.0%")};
  text-align: center;
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  border-color: #000;
  border-width: 2;
  margin-left: ${({ marginLeft }) => marginLeft || 0};
  margin-right: ${({ marginRight }) => marginRight || 0};
`;

const ButtonText = styled(StyledText)`
  align-self: center;
  padding-top: ${hp("1.0%")};
  padding-bottom: ${hp("1.0%")};
  padding-right: ${wp("7.0%")};
  padding-left: ${wp("7.0%")};
  font-weight: 400;
  font-size: ${hp("4.0%")};
`;
const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export {
  FlexScreenContainer,
  StyledText,
  HeaderText,
  ButtonRow,
  Button,
  ButtonText,
  KeyboardView
};
