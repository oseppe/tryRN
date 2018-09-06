import React from 'react';
import {
  Content, Container, Footer, Form, Item, Label, Input,
} from 'native-base';
// import { colors } from '../../Themes/colors';

import Header from '../../Common/Components/CustomHeader';
import BtnBack from '../../Common/Components/CustomHeaderActions/LeftBackButton';

export default class RegisterAccount extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  _scrollToInput = (reactNode) => {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode);
  }
  // enableAutomaticScroll
  // enableOnAndroid

  render() {
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
