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

    delete data._id;
    console.log("data", data);

    dispatch({
      type: CREATE_CHANNEL,
      data
    });
    // Initialize channel through chatClient:
    const channel = chatClient.channel(data.channelType, data.channelId, {
      name: data.channelName
    });
    const channelState = await channel.watch();
    console.log("newChannel: ", channel);
    console.log("channelState", channelState);
    return { channel, channelState };
  } catch (err) {
    console.log("createChannel redux error", err);
  }
};

export { createChannel };
