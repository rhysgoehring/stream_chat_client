import { createStackNavigator, createAppContainer } from "react-navigation";

import LandingScreen from "../screens/landing";
import SignInScreen from "../screens/signIn";
import SignUpScreen from "../screens/signUp";

const AuthStack = createStackNavigator(
  {
    LandingScreen: {
      screen: LandingScreen
    },
    SignUpScreen: {
      screen: SignInScreen
    },
    SignInScreen: {
      screen: SignUpScreen
    }
  },
  { headerMode: "none" }
);

const Navigation = createAppContainer(AuthStack);

export default Navigation;
