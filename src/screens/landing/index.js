import React from "react";
import {
  FlexScreenContainer,
  StyledText,
  HeaderText,
  ButtonRow,
  Button,
  ButtonText
} from "../../components/common";

import {
  widthPercentage as wp,
  heightPercentage as hp
} from "../../styles/dimensions";

const LandingScreen = ({ navigation }) => {
  return (
    <FlexScreenContainer>
      <HeaderText marginBottom={hp("20%")}>StreamChat</HeaderText>
      <ButtonRow>
        <Button onPress={() => navigation.push("SignInScreen")}>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <Button onPress={() => navigation.push("SignUpScreen")}>
          <ButtonText>Sign Up</ButtonText>
        </Button>
      </ButtonRow>
    </FlexScreenContainer>
  );
};

export default LandingScreen;
