import axios from "axios";
import { AsyncStorage } from "react-native";
import NavigationService from "../navigation/navigationService";
import { SIGN_IN, SIGN_UP } from "./types";
import chatClient from "../chatClient";

const ROOT_URL = "http://10.0.0.113:4000";

const signInUser = (username, password) => async dispatch => {
  try {
    const { data } = await axios.post(`${ROOT_URL}/users/signin`, {
      username,
      password
    });
    // TODO: Handle errors
    // Set API token:
    await AsyncStorage.setItem("streamToken", data.token);
    // Set Chat Token:
    await AsyncStorage.setItem("chatToken", data.chatToken);
    const user = {
      _id: data._id,
      username: data.username
    };
    // Initialize StreamChat and set user:
    await chatClient.setUser(
      {
        id: user._id,
        name: user.username
      },
      data.chatToken
    );

    dispatch({
      type: SIGN_IN,
      user
    });

    NavigationService.navigate("Tabs");
  } catch (err) {
    console.log("signInUser redux action error", err);
  }
};

const signUpUser = (username, password) => async dispatch => {
  try {
    const { data } = await axios.post(`${ROOT_URL}/users/signup`, {
      username,
      password
    });
    // TODO: Handle Errors

    // Set API Token:
    await AsyncStorage.setItem("streamToken", data.token);
    // Set Chat Token:
    await AsyncStorage.setItem("chatToken", data.chatToken);

    const user = {
      _id: data._id,
      username: data.username
    };

    // Initialize StreamChat and set user:
    await chatClient.setUser(
      {
        id: user._id,
        name: user.username
      },
      data.chatToken
    );

    dispatch({
      type: SIGN_UP,
      user
    });

    NavigationService.navigate("Tabs");
  } catch (err) {
    console.log("signUpUser redux action error", err);
  }
};

export { signInUser, signUpUser };
