import axios from "axios";
import { NavigationActions } from "react-navigation";
import { StreamChat } from "stream-chat";
import { AsyncStorage } from "react-native";
import { SIGN_IN, SIGN_UP } from "./types";
import { STREAM_KEY } from "../config";

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
    const chatClient = await new StreamChat(STREAM_KEY);
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
    const chatClient = await new StreamChat(STREAM_KEY);
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
  } catch (err) {
    console.log("signUpUser redux action error", err);
  }
};

export { signInUser, signUpUser };
