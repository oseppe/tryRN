import React from 'react';
import { Font, AppLoading } from "expo"
import { Container, Button, Text } from 'native-base';
import Roboto_medium from 'native-base/Fonts/Roboto_medium.ttf'
import { ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import WelcomePhoto from './assets/images/welcome_screen.jpg';
import { MainPalette } from '../../Common/Constants/colors';
import { ROUTE_KEYS } from '../../Common/Constants/keys';

class Welcome extends React.Component {
  state = {
    isFontLoaded: false,
  }

  async componentDidMount() {
    if (this.state.isFontLoaded) return;

    await Font.loadAsync({
      Roboto_medium
    })

    this.setState({ isFontLoaded: true })
  }

  onPressLogin = () => Actions[ROUTE_KEYS.LOGIN].call();

  render() {
    const fontNotLoaded = !this.state.isFontLoaded;

    if (fontNotLoaded) return <AppLoading />

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
              <Text>LOGIN</Text>
            </Button>
            <Button 
              block 
              bordered
              style={{
                borderColor: MainPalette.darkIndigo,
                backgroundColor: MainPalette.wildSand,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 30,
              }}
            >
              <Text>REGISTER</Text>
            </Button>
        </ImageBackground>
      </Container>
    )
  }
}; 

export default Welcome;