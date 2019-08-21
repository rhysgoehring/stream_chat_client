import axios from "axios";
import { AsyncStorage } from "react-native";
import { SIGN_IN } from "./types";

const ROOT_URL = "http://10.0.0.113:4000";

const signInUser = (username, password) => async dispatch => {
  try {
    const { data } = await axios.post(`${ROOT_URL}/users/signin`, {
      username,
      password
    });
    console.log("res", data);
    // TODO: Handle errors
    await AsyncStorage.setItem("streamToken", data.token);
    delete data.token;
    dispatch({
      type: SIGN_IN,
      data
    });
  } catch (err) {
    console.log("signInUser redux action error", err);
  }
};

export { signInUser };
