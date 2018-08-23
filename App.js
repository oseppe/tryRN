import React from 'react';
import { createStackNavigator } from 'react-navigation';
// import { StyleSheet, Text, View } from 'react-native';

import Login from './App/Screens/Login';
import Home from './App/Screens/Home';

const Stack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default class App extends React.Component {
  render() {
    return <Stack />
  }
}



// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
