import React from 'react';
// import { } from 'react-native';
import {
  Content, Container, Form, Item, Label, Input, Icon,
} from 'native-base';
// import { colors } from '../../Themes/colors';

import Header from '../../Common/Components/CustomHeader';
import BtnBack from '../../Common/Components/CustomHeaderActions/LeftBackButton';
import TextField from '../../Common/Components/TextField';
import { required, noXs } from '../../Common/Utils/validations';

export default class RegisterAccount extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    policy: '',
    policyError: '',
    name: '',
    nameError: '',
    focusedInput: '',
  }

  _scrollToInput = (reactNode) => {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode);
  }
  // enableAutomaticScroll
  // enableOnAndroid

  onPressIcon = (label) => () => this.setState({ [label]: '' })

  onFocusInput = (label) => () => this.setState({ focusedInput: label })

  onBlurInput = () => this.setState({ focusedInput: '' });

  onChangeTextInput = (label) => {
    return (value, errorMsg) => {
      const labelError = `${label}Error`;

      this.setState({
        [label]: value,
        [labelError]: errorMsg,
      });
    };
  }

  onValidate = (label) => {
    return (errorMsg) => {
      const labelError = `${label}Error`;

      this.setState({ [labelError]: errorMsg });
    };
  }

  render() {
    const {
      policy,
      policyError,
      name,
      nameError,
      focusedInput,
    } = this.state;

    return (
      <Container>
        <Header
          title="Register Account"
          LeftChildren={BtnBack}
        />
        <Content
          keyboardOpeningTime={0}
          enableOnAndroid
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={false}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Form>
            <TextField
              label="policy"
              value={policy}
              errorMsg={policyError}
              focusedInput={focusedInput}
              onBlur={this.onBlurInput}
              onFocus={this.onFocusInput('policy')}
              onChangeText={this.onChangeTextInput('policy')}
              onPressIcon={this.onPressIcon('policy')}
              onValidate={this.onValidate('policy')}
              validators={[noXs, required]}
            />
            <TextField
              label="name"
              value={name}
              errorMsg={nameError}
              focusedInput={focusedInput}
              onBlur={this.onBlurInput}
              onFocus={this.onFocusInput('name')}
              onChangeText={this.onChangeTextInput('name')}
              onPressIcon={this.onPressIcon('name')}
              onValidate={this.onValidate('name')}
              validators={[required]}
            />
          </Form>
        </Content>
      </Container>
    );
  }
}


// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
// style={{
//   justifyContent: 'space-around',
//   alignItems: 'center',
//   height: '100%',
// }}

/* <Form>
          <Item floatingLabel>
            <Label>Policy No</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email2</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email 3</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email 4</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email 5</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Label>Email 6</Label>
            <Input />
          </Item>
        </Form> */

/*  <View style={{ paddingLeft: 16 }}>
      <Text style={{ color: '#333333' }}>Error</Text>
    </View> */
