import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { colors } from '../../Themes/colors';
import { getPassedUsername, getPassedPassword } from '../../Utilities/utils';

export default class Home extends React.Component {
  onPressLogout = () => this.props.navigation.navigate('Auth');

  render() {
    const { navigation } = this.props;

    const username = getPassedUsername(navigation); 
    const password = getPassedPassword(navigation);

    return (
      <View style={styles.container}>
				<Text>Hello {username}</Text>
        <Text>{password}</Text>
        <Button 
          title="Logout"
          color={colors.btnLogin}
          accessibilityLabel="Logout"
          onPress={this.onPressLogout}
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
