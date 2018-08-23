import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { colors } from '../../Themes/colors';

export default class AuthLoading extends React.Component {
  
  componentDidMount = () => {
    const isLoggedIn = Math.random < 0.5

    this.props.navigation.navigate( isLoggedIn ? 'App' : 'Auth')
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
