import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

class Sample extends React.Component {
  state = {
    title: 'Sample',
  }

  render() {
    const { title } = this.state;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}

export default Sample;
