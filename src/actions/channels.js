import axios from "axios";
import { AsyncStorage } from "react-native";
import NavigationService from "../navigation/navigationService";
import { CREATE_CHANNEL } from "./types";
import chatClient from "../chatClient";

const ROOT_URL = "http://10.0.0.113:4000";

const createChannel = (channelName, username) => async dispatch => {
  try {
    console.log("channelName", channelName);
    console.log("username", username);
    // Check DB for channel:
    const { data } = await axios.post(`${ROOT_URL}/channels/new`, {
      channelName,
      username
    });

    // TODO: Handle errors

    console.log("data", data);
    delete data.channelMembers;
    // TODO: Create channel through chat client:
    dispatch({
      type: CREATE_CHANNEL,
      data
    });
  } catch (err) {
    console.log("createChannel redux error", err);
  }
};

export { createChannel };
