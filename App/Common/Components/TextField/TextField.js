import React from 'react';
import {
  View, Text,
} from 'react-native';
import {
  Icon, Input, Item, Label,
} from 'native-base';
import PropTypes from 'prop-types';

import { capitalize } from '../../Utils/stringUtils';

import { MainPalette } from '../../Constants/colors';

const TextField = (props) => {
  const {
    errorMsg,
    focusedInput,
    label,
    onChangeText,
    onFocus,
    onPressIcon,
    onValidate,
    value,
    validators,
  } = props;

  const isFocused = focusedInput === label;

  const transFormedLabel = capitalize(label);

  const updatedOnChangeText = (val) => {
    let errorMsgs = [];

    // Run if passed
    if (validators.length > 0) {
      errorMsgs = validators.map(validator => validator(val));
    }

    const hasErrorMsg = errorMsgs.find(msg => msg !== '');

    const msg = hasErrorMsg === undefined ? '' : hasErrorMsg;

    onChangeText(val, msg);
  };

  const validateInput = () => {
    let errorMsgs = [];

    // Run if passed
    if (validators.length > 0) {
      errorMsgs = validators.map(validator => validator(value));
    }

    const hasErrorMsg = errorMsgs.find(msg => msg !== '');

    const msg = hasErrorMsg === undefined ? '' : hasErrorMsg;

    onValidate(msg);
  }

  return (
    <View>
      <Item floatingLabel>
        <Label>{transFormedLabel}</Label>
        <Input value={value} onChangeText={updatedOnChangeText} onFocus={onFocus} onBlur={validateInput} />
        { isFocused ? <Icon name="close-circle" onPress={onPressIcon} /> : null }
      </Item>
      <View style={{ paddingLeft: 16 }}>
        <Text style={{ color: MainPalette.burntSienna }}>{errorMsg}</Text>
      </View>
    </View>
  );
};

TextField.propTypes = {
  errorMsg: PropTypes.string,
  focusedInput: PropTypes.string,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onPressIcon: PropTypes.func,
  onValidate: PropTypes.func,
  value: PropTypes.string,
  validators: PropTypes.array,
};

TextField.defaultProps = {
  errorMsg: '',
  focusedInput: '',
  label: 'label',
  onChangeText: () => {},
  onFocus: () => {},
  onPressIcon: () => {},
  onValidate: () => {},
  value: '',
  validators: [],
};

export default TextField;
