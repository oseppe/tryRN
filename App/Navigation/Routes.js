import React from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Navigation } from 'react-native-navigation';
import {
  Router, Stack, Scene, Actions,
} from 'react-native-router-flux';

import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import Advisors from '../Screens/Advisors';
import Others from '../Screens/Others';
import Login from '../Screens/Login';
import ForgotPassword from '../Screens/ForgotPassword';
import RegisterAccount from '../Screens/RegisterAccount';
import AuthLoading from '../Screens/AuthLoading';
import Welcome from '../Screens/Welcome';
import { ROUTE_KEYS } from '../Common/Constants/keys';
import { isAndroid } from '../Common/Utils/platformChecker';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Advisors: {
      screen: Advisors,
    },
    Profile: {
      screen: Profile,
    },
    Others: {
      screen: Others,
    },
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
    RegisterAccount: {
      screen: RegisterAccount,
    },
  },
  {
    headerMode: 'none',
  },
);

export const RoutesRN = createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

// export
export const registerRoutes = () => {
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Profile', () => Profile);
  Navigation.registerComponent('Advisors', () => Advisors);
  Navigation.registerComponent('Others', () => Others);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('ForgotPassword', () => ForgotPassword);
};

export const AppRoutes = () => {
  const hideNavBar = isAndroid();

  return (
    <Router>
      <Stack key={ROUTE_KEYS.ROOT}>
        <Scene key={ROUTE_KEYS.WELCOME} component={Welcome} hideNavBar />
        <Scene key={ROUTE_KEYS.LOGIN} component={Login} title="Login" hideNavBar={hideNavBar} />
        <Scene key={ROUTE_KEYS.HOME} component={Home} title="Home" hideNavBar={hideNavBar} />
        <Scene key={ROUTE_KEYS.ADVISORS} component={Home} title="Advisors" />
        <Scene key={ROUTE_KEYS.REGISTER_ACCOUNT} component={RegisterAccount} title="Register Account" hideNavBar={hideNavBar} />
      </Stack>
    </Router>
  );
};

export const GotoScreen = key => Actions[key]();
