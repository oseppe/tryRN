import React from 'react';
import { Container, Button, Text } from 'native-base';
import { ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import WelcomePhoto from './assets/images/welcome_screen.jpg';
import { MainPalette } from '../../Common/Constants/colors';
import { ROUTE_KEYS } from '../../Common/Constants/keys';
import { getTexts } from '../../Localisation/textsHelper';
import { BTN_LOGIN, BTN_REGISTER } from '../../Localisation/labelKeys';

class Welcome extends React.Component {
  onPressLogin = () => Actions[ROUTE_KEYS.LOGIN].call();

  onPressRegister = () => Actions[ROUTE_KEYS.REGISTER_ACCOUNT].call();

  render() {
    const labels = getTexts([BTN_LOGIN, BTN_REGISTER]);

    return (
      <Container>
        <ImageBackground
          source={WelcomePhoto}
          style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}
        >
          <Button
            block
            primary
            onPress={this.onPressLogin}
            style={{
              backgroundColor: MainPalette.axaBlue,
              margin: 20,
            }}
          >
            <Text>{labels[BTN_LOGIN]}</Text>
          </Button>
          <Button
            block
            bordered
            onPress={this.onPressRegister}
            style={{
              borderColor: MainPalette.darkIndigo,
              backgroundColor: MainPalette.wildSand,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 30,
            }}
          >
            <Text>{labels[BTN_REGISTER]}</Text>
          </Button>
        </ImageBackground>
      </Container>
    );
  }
}

export default Welcome;
