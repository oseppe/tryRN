import React, { Component } from 'react';
import {
  Button, Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

export default class LeftBackButton extends Component {
  onPress = () => Actions.pop();

  render() {
    return (
      <Button
        onPress={this.onPress}
        style={styles.btn}
      >
        <Icon name="arrow-back" />
      </Button>
    );
  }
}
