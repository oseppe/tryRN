import React from 'react';
// import { } from 'react-native';
import {
  Content, Container,
} from 'native-base';


import Header from '../../Common/Components/CustomHeader';
import BtnBack from '../../Common/Components/CustomHeaderActions/LeftBackButton';
import RegisterForm from './RegisterForm';
import styles from './styles';

export default class RegisterAccount extends React.Component {
  onSubmit = (values) => {
    console.log('Submit!');
    console.log(values);
  }

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
          contentContainerStyle={styles.contentContainer}
        >
          <RegisterForm style={styles.form} onSubmit={this.onSubmit} />
        </Content>
      </Container>
    );
  }
}

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
