import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { colors } from '../../Themes/colors';

export default class Login extends React.Component {

	onPressLogin = () => {
		this.props.navigation.navigate('Home');
	}

  render() {
    return (
      <View style={styles.container}>
				<Button 
					title="Login"
					color={colors.btnLogin}
					accessibilityLabel="Login"
					onPress={this.onPressLogin}
				/>
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
