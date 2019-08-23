import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import LandingScreen from "../screens/landing";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";

import HomeScreen from "../screens/home";
import ChannelScreen from "../screens/channels";
import UserInfoScreen from "../screens/userInfo";

const AuthStack = createStackNavigator(
  {
    LandingScreen: {
      screen: LandingScreen
    },
    SignInScreen: {
      screen: SignInScreen
    },
    SignUpScreen: {
      screen: SignUpScreen
    }
  },
  { headerMode: "none", initialRouteName: "LandingScreen" }
);

const TabNav = createBottomTabNavigator(
  {
    ChannelScreen: {
      screen: ChannelScreen,
      navigationOptions: {
        tabBarLabel: "Channels",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="stream" size={18} color={tintColor} />
        )
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={18} color={tintColor} />
        )
      }
    },
    UserInfoScreen: {
      screen: UserInfoScreen,
      navigationOptions: {
        tabBarLabel: "User Info",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user-cog" size={18} color={tintColor} />
        )
      }
    }
  },
  { headerMode: "none", initialRouteName: "HomeScreen" }
);

const RootNavigator = createStackNavigator(
  {
    Auth: {
      screen: AuthStack
    },
    Tabs: {
      screen: TabNav
    }
  },
  { headerMode: "none", initialRouteName: "Auth" }
);

const Navigation = createAppContainer(RootNavigator);

export default Navigation;
