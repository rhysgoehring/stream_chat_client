import React, { useState } from "react";
import { connect } from "react-redux";
import { signInUser } from "../../actions";
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

const SignInScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("props", props);
  const handleSubmit = () => {
    // TODO: Validate inputs
    props.signInUser(username, password);
  };

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
        <Button onPress={handleSubmit}>
          <ButtonText>Sign In</ButtonText>
        </Button>
        <Button>
          <ButtonText>Back</ButtonText>
        </Button>
      </ButtonRow>
    </FlexScreenContainer>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { signInUser }
)(SignInScreen);
