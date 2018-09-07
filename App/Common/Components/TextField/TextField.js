import React from 'react';
// import {
//   StyleSheet, View, Button, TextInput, Text
// } from 'react-native';
import {
  Icon, Input, Item, Label,
} from 'native-base';
import PropTypes from 'prop-types';

import { capitalize } from '../../Utils/stringUtils';

// import { MainPalette } from '../../Constants/colors';

const TextField = (props) => {
  const {
    focusedInput,
    label,
    onChangeText,
    onFocus,
    onPressIcon,
    value,
  } = props;

  const isFocused = focusedInput === label;

  const transFormedLabel = capitalize(label);

  return (
    <Item floatingLabel>
      <Label>{transFormedLabel}</Label>
      <Input value={value} onChangeText={onChangeText} onFocus={onFocus} />
      { isFocused ? <Icon name="close-circle" onPress={onPressIcon} /> : null }
    </Item>
  );
};

TextField.propTypes = {
  focusedInput: PropTypes.string,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onPressIcon: PropTypes.func,
  value: PropTypes.string,
};

TextField.defaultProps = {
  focusedInput: '',
  label: 'label',
  onChangeText: () => {},
  onFocus: () => {},
  onPressIcon: () => {},
  value: '',
};

export default TextField;
