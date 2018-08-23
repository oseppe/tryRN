import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { colors } from '../../Themes/colors';

export default class Login extends React.Component {

	onPressLogin = () => {
		this.toastify.show('Hello World !', 1000);
	}

  render() {
    return (
      <View style={styles.container}>
				<Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
