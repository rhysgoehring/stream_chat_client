import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";

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
        tabBarLabel: "Channels"
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home"
      }
    },
    UserInfoScreen: {
      screen: UserInfoScreen,
      navigationOptions: {
        tabBarLabel: "User Info"
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
