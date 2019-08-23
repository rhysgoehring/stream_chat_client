import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
  ChannelList,
  Thread,
  ChannelPreviewMessenger
} from "stream-chat-react-native";
import FloatingActionButton from "../../components/fab";
import {
  FlexScreenContainer,
  HeaderText,
  ButtonRow,
  Button,
  ButtonText,
  KeyboardView
} from "../../components/common";

import chatClient from "../../chatClient";

const filters = { type: "messaging" };
const sort = {
  last_message_at: -1,
  cid: 1
};
const options = {
  member: true,
  watch: true
};

const ChannelScreen = props => {
  return (
    <SafeAreaView>
      <Chat client={chatClient}>
        <View style={{ display: "flex", height: "100%", padding: 10 }}>
          <ChannelList
            Preview={ChannelPreviewMessenger}
            filters={filters}
            sort={sort}
            options={options}
            onSelect={channel => {
              console.log("channel", channel);
            }}
          />
          <FloatingActionButton>+</FloatingActionButton>
        </View>
      </Chat>
    </SafeAreaView>
  );
};

export default ChannelScreen;
