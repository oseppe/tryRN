import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

import { colors } from '../../Themes/colors';
import { GotoScreen } from '../../Navigation/Routes';

export default class Login extends React.Component {

  state = {
    username: '',
    password: '',
  }

  onChangeUsername = username => this.setState({username});
  onChangePassword = password => this.setState({password});

	onPressLogin = () => {
    const { username, password } = this.state;

    // this.props.navigation.navigate('AuthLoading', { username, password });
    GotoScreen('advisors');
	}

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.topPadding} />
        <View style={styles.loginUI}>
          <TextInput
            value={username} 
            style={styles.input} 
            placeholder="Username"
            onChangeText={this.onChangeUsername}
          />
          <TextInput
            value={password} 
            style={styles.input} 
            placeholder="Password"
            onChangeText={this.onChangePassword}
          />
          <Button 
            title="Login"
            color={colors.btnLogin}
            accessibilityLabel="Login"
            onPress={this.onPressLogin}
          />
          <Text>Forgot Password</Text>
        </View>
        <View style={styles.botPadding} />
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
  topPadding: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginUI: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    width: '70%',
  },
  botPadding: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: '25%',
    width: '100%',
  },
  btnLogin: {
    width: '100%',
  }
});