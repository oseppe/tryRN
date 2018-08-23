import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


import { colors } from '../../Themes/colors';

export default class ForgotPassword extends React.Component {
  render() {
    return (
      <View style={styles.container}>
		    <Text>Forgot My Password Oh Noes</Text>
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
