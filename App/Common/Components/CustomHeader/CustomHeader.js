import React from 'react';
import {
  Header, Left, Body, Right,
} from 'native-base';
import { Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import PropTypes from 'prop-types';

import { MainPalette } from '../../Constants/colors';

const CustomHeader = (props) => {
  const {
    headerStyle,
    title,
    leftStyle,
    LeftChildren,
    rightStyle,
    RightChildren,
    bodyStyle,
  } = props;

  const statusBarHeight = getStatusBarHeight();
  const paddingTop = statusBarHeight * 1.5;
  const paddingBottom = statusBarHeight * 0.75;

  const updatedHeaderStyle = {
    ...headerStyle,
    paddingTop,
    paddingBottom,
  };

  return (
    <Header style={updatedHeaderStyle}>
      <Left style={{
        ...leftStyle,
        flex: 1,
      }}
      >
        { LeftChildren ? <LeftChildren /> : null }
      </Left>
      <Body style={{
        flex: 2,
        ...bodyStyle,
        alignItems: 'center',
      }}
      >
        <Text style={{
          color: MainPalette.white,
          fontWeight: 'bold',
        }}
        >
          {title}
        </Text>
      </Body>
      <Right style={{
        ...rightStyle,
        flex: 1,
      }}
      >
        { RightChildren ? <RightChildren /> : null }
      </Right>
    </Header>
  );
};

CustomHeader.propTypes = {
  headerStyle: PropTypes.object,
  leftStyle: PropTypes.object,
  LeftChildren: PropTypes.func,
  rightStyle: PropTypes.object,
  RightChildren: PropTypes.func,
  bodyStyle: PropTypes.object,
  title: PropTypes.string,
};

CustomHeader.defaultProps = {
  headerStyle: {
    backgroundColor: MainPalette.axaBlue,
  },
  leftStyle: { flex: 1 },
  LeftChildren: null,
  rightStyle: { flex: 1 },
  RightChildren: null,
  bodyStyle: { flex: 2 },
  title: '',
};

export default CustomHeader;
