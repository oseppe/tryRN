import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Navigation } from 'react-native-navigation';

import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import Advisors from '../Screens/Advisors';
import Others from '../Screens/Others';
import Login from '../Screens/Login';
import ForgotPassword from '../Screens/ForgotPassword';
import RegisterAccount from '../Screens/RegisterAccount';
import AuthLoading from '../Screens/AuthLoading';

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
