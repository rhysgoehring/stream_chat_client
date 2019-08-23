import React from "react";
import styled from "styled-components/native";
import { heightPercentage as hp } from "../styles/dimensions";

const FAContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const FAButton = styled.TouchableOpacity`
  height: ${hp("7.0%")};
  width: ${hp("7.0%")};
  border-radius: ${hp("7.0%") / 2};
  position: absolute;
  bottom: 20;
  right: 20;
  justify-content: center;
  align-items: center;
  background-color: #00e676;
  z-index: 5;
`;

const FAText = styled.Text`
  font-size: ${hp("5.0%")};
  color: #fff;
  text-align: center;
`;

const FloatingActionButton = ({ onPress }) => (
  <FAContainer>
    <FAButton style={{ elevation: 5 }} onPress={onPress}>
      <FAText style={{ textAlignVertical: "center" }}>+</FAText>
    </FAButton>
  </FAContainer>
);

export default FloatingActionButton;
