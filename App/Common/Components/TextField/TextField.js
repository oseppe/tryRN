import React from 'react';
import {
  View, Text,
} from 'react-native';
import {
  Icon, Input, Item, Label,
} from 'native-base';
import PropTypes from 'prop-types';


import { validateInput } from '../../Utils/validations';

import { capitalize } from '../../Utils/stringUtils';

import { MainPalette } from '../../Constants/colors';

const TextField = (props) => {
  const {
    errorMsg,
    focusedInput,
    label,
    onBlur,
    onChangeText,
    onFocus,
    onPressIcon,
    onValidate,
    secureTextEntry,
    value,
    validators,
  } = props;

  const isFocused = focusedInput === label;
  const hasError = errorMsg !== '';
  const transFormedLabel = capitalize(label);

  const updatedOnChangeText = (val) => {
    // let errorMsgs = [];
    // // Run if passed
    // if (validators.length > 0) {
    //   errorMsgs = validators.map(validator => validator(val));
    // }

    // const hasErrorMsg = errorMsgs.find(msg => msg !== '');

    // const msg = hasErrorMsg === undefined ? '' : hasErrorMsg;

    const msg = validateInput(val, validators);

    onChangeText(val, msg);
  };

  const updatedOnBlur = () => {
    // let errorMsgs = [];

    // // Run if passed
    // if (validators.length > 0) {
    //   errorMsgs = validators.map(validator => validator(value));
    // }

    // const hasErrorMsg = errorMsgs.find(msg => msg !== '');

    // const msg = hasErrorMsg === undefined ? '' : hasErrorMsg;

    const msg = validateInput(value, validators);

    onValidate(msg);
    onBlur();
  };

  return (
    <View>
      <Item floatingLabel error={hasError}>
        <Label>{transFormedLabel}</Label>
        <Input
          value={value}
          onChangeText={updatedOnChangeText}
          onFocus={onFocus}
          onBlur={updatedOnBlur}
          secureTextEntry={secureTextEntry}
        />
        { isFocused ? <Icon name="close-circle" style={{ color: MainPalette.mineShaft }} onPress={onPressIcon} /> : null }
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
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onPressIcon: PropTypes.func,
  onValidate: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string,
  validators: PropTypes.array,
};

TextField.defaultProps = {
  errorMsg: '',
  focusedInput: '',
  label: 'label',
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
  onPressIcon: () => {},
  onValidate: () => {},
  secureTextEntry: false,
  value: '',
  validators: [],
};

export default TextField;
