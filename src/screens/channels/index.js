import React, { useState } from "react";
import { connect } from "react-redux";
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
import { createChannel } from "../../actions";
import NewChannelModal from "../../components/newChannelModal";
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
  const [modalVisible, setModalVisible] = useState(false);
  const [newChannelName, setNewChannelName] = useState("");
  return (
    <SafeAreaView>
      <Chat client={chatClient}>
        <View style={{ display: "flex", height: "100%", padding: 10 }}>
          <ChannelList
            Preview={ChannelPreviewMessenger}
            // filters={filters}
            // sort={sort}
            // options={options}
            onSelect={channel => {
              console.log("channel", channel);
            }}
          />
          <FloatingActionButton onPress={() => setModalVisible(true)}>
            +
          </FloatingActionButton>
          <NewChannelModal
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
              setNewChannelName("");
            }}
            nameValue={newChannelName}
            onChangeName={text => setNewChannelName(text)}
            onPressBack={() => {
              setModalVisible(false);
              setNewChannelName("");
            }}
            onPressSubmit={() =>
              props.createChannel(newChannelName, props.auth.user.username)
            }
          />
        </View>
      </Chat>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    channels: state.channels
  };
};

export default connect(
  mapStateToProps,
  { createChannel }
)(ChannelScreen);
