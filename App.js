import React from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';
import Roboto from 'native-base/Fonts/Roboto.ttf';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf';

import store from './App/store';
// import { createStackNavigator } from 'react-navigation';
// import { StyleSheet, Text, View } from 'react-native';
import { AppRoutes as Routes } from './App/Navigation/Routes';

export default class App extends React.Component {
  state = {
    isFontLoaded: false,
  }

  async componentDidMount() {
    const { isFontLoaded } = this.state;
    if (isFontLoaded) return;

    await Font.loadAsync({
      Roboto_medium,
      Roboto,
    });

    this.setState({ isFontLoaded: true });
  }

  render() {
    const { isFontLoaded } = this.state;

    const fontNotLoaded = !isFontLoaded;

    if (fontNotLoaded) return <AppLoading />;

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
