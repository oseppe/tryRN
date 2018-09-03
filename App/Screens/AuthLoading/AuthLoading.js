import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { colors } from '../../Themes/colors';
import { getPassedUsername, getPassedPassword } from '../../Utilities/utils';

export default class AuthLoading extends React.Component {
  
  componentDidMount = () => {
    const { navigation } = this.props;

    const username = getPassedUsername(navigation) 
    const password = getPassedPassword(navigation);
    
    hasValidCreds = username && password;
    // hasPassedCreds = true;
    if (hasValidCreds) this.props.navigation.navigate( 'Home', { username, password});
    else this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={styles.container}>
	    <Text>Signing In...</Text>
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
