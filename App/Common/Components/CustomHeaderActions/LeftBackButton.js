import React, { Component } from 'react';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

export default class LeftBackButton extends Component {
  onPress = () => Actions.pop();

  render() {
    return (
      <Icon name="arrow-back" onPress={this.onPress} style={styles.icon} />
    );
  }
}
