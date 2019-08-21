import React from "react";
import styled from "styled-components/native";
import { StyledText } from "./common";
import {
  widthPercentage as wp,
  heightPercentage as hp
} from "../styles/dimensions";

const InputWrapper = styled.View`
  height: ${hp("5.0%")};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0};
  margin-top: ${({ marginTop }) => marginTop || 0};
  width: ${wp("100%")};
  text-align: center;
`;

const Label = styled(StyledText)`
  flex: 0.5;
  padding-top: 10;
  font-family: "Raleway-Regular";
  color: #000;
  text-align: center;
`;

const Field = styled.TextInput`
  flex: 1;
  font-family: "Raleway-Regular";
  font-size: ${hp("2.5%")};
  color: #000;
  border-bottom-width: 1;
  border-color: #000;
  padding-bottom: 0;
`;

const Input = ({
  marginTop,
  marginBottom,
  label,
  secureTextEntry,
  placeholder,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  value,
  onChangeText,
  selectTextOnFocus,
  maxLength,
  extraPadding
}) => (
  <InputWrapper marginTop={marginTop} marginBottom={marginBottom}>
    <Label extraPadding={extraPadding}>{label}</Label>
    <Field
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={autoCorrect}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      selectTextOnFocus={selectTextOnFocus}
      placeholderTextColor="#000"
      contextMenuHidden
      maxLength={maxLength}
      underlineColorAndroid="transparent"
    />
  </InputWrapper>
);

export default Input;
