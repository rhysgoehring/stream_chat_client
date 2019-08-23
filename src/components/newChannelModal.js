import React from "react";
import { View, Modal } from "react-native";
import {
  FlexScreenContainer,
  HeaderText,
  ButtonRow,
  Button,
  ButtonText,
  KeyboardView
} from "./common";

import Input from "./input";

import {
  heightPercentage as hp,
  widthPercentage as wp
} from "../styles/dimensions";

const NewChannelModal = ({
  visible,
  onRequestClose,
  nameValue,
  onChangeName,
  onPressBack,
  onPressSubmit
}) => {
  return (
    <View>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={onRequestClose}
        presentationStyle="formSheet"
      >
        <FlexScreenContainer>
          <HeaderText>Create a Channel</HeaderText>
          <KeyboardView behavior="padding">
            <Input
              label="Channel Name"
              autoCapitalize="words"
              autoCorrect
              value={nameValue}
              onChangeText={onChangeName}
              maxLength={30}
            />
          </KeyboardView>
          <ButtonRow style={{ flex: 1 }}>
            <Button onPress={onPressBack}>
              <ButtonText>Back</ButtonText>
            </Button>
            <Button onPress={onPressSubmit}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </ButtonRow>
        </FlexScreenContainer>
      </Modal>
    </View>
  );
};

export default NewChannelModal;
