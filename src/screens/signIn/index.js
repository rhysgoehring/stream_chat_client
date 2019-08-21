import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import {
  FlexScreenContainer,
  StyledText,
  HeaderText,
  ButtonRow,
  Button,
  ButtonText,
  KeyboardView
} from "../../components/common";

import Input from "../../components/input";

import {
  widthPercentage as wp,
  heightPercentage as hp
} from "../../styles/dimensions";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username", username);
  console.log("password", password);
  return (
    <FlexScreenContainer>
      <HeaderText marginTop={hp("10.0%")}>Sign In</HeaderText>
      <KeyboardView behavior="padding">
        <Input
          label="Username"
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={text => setUsername(text)}
          maxLength={15}
          marginTop={hp("5.0%")}
        />
        <Input
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          maxLength={50}
          marginTop={hp("5.0%")}
        />
      </KeyboardView>
      <ButtonRow style={{ flex: 1 }}>
        <Button>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <Button>
          <ButtonText>Back</ButtonText>
        </Button>
      </ButtonRow>
    </FlexScreenContainer>
  );
};

export default SignInScreen;
