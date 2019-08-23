import React from "react";
import { Provider } from "react-redux";
import NavigationService from "./src/navigation/navigationService";
import Navigation from "./src/navigation";
import store from "./src/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigation
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
