import React from 'react';
import {
  Label, Button, Form, Input, Item, View, Text,
} from 'native-base';
import { Field, reduxForm } from 'redux-form';

import { MainPalette } from '../../Common/Constants/colors';

const customInput = ({ input, label, meta: { touched, error }, ...props }) => [
  <Item floatingLabel key="item" error={touched && error ? true : false}>
    <Label>{label}</Label>
    <Input {...input} {...props} />
  </Item>,
  <View key="error">
    {touched && error && <Text>{error}</Text>}
  </View>,
];

const RegisterForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form>
      <Field name="policy" label="Policy" component={customInput} type="text" />
      <Field name="pwd" label="PWD" component={customInput} type="text" />
      <View>
        <Button
          block
          primary
          title="Login"
          color={MainPalette.flamingo}
          accessibilityLabel="Login"
          onPress={handleSubmit}
        />
      </View>
    </Form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'register',
})(RegisterForm);
