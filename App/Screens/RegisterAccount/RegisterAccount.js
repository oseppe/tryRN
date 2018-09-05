import React from 'react';
import { Platform, StyleSheet, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import {
  Content, Container, Header, Footer, Form, Item, Label, Input,
} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { colors } from '../../Themes/colors';

export default class RegisterAccount extends React.Component {
  state = {
    isComplete: false,
  }

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log('mounted');
  }

  onFocus = () => {
    console.log('blab');
  }

  _scrollToInput = (reactNode) => {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode);
  }

  render() {
    return (
      <Container>
        <Content
          enableOnAndroid
          keyboardOpeningTime={0}
          contentContainerStyle={{
            height: '100%',
            justifyContent: 'center',
          }}
        >
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Policy</Label>
              <Input />
            </Item>
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
