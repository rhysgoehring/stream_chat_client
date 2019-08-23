import { NavigationActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

// USAGE:
// import NavigationService from 'path-to-NavigationService.js';

// NavigationService.navigate('ChatScreen', { userName: 'Lucy' });

export default {
  navigate,
  setTopLevelNavigator
};
