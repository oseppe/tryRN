import React from 'react';
import {
  Header, Left, Body, Right,
} from 'native-base';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import { MainPalette } from '../../Constants/colors';

const CustomHeader = (props) => {
  const {
    headerStyle,
    title,
    leftStyle,
    leftChildren,
    rightStyle,
    rightChildren,
    bodyStyle,
  } = props;

  return (
    <Header style={headerStyle}>
      <Left style={leftStyle}>
        { leftChildren }
      </Left>
      <Body style={bodyStyle}><Text>{title}</Text></Body>
      <Right style={rightStyle}>
        { rightChildren }
      </Right>
    </Header>
  );
};

CustomHeader.propTypes = {
  headerStyle: PropTypes.object,
  leftStyle: PropTypes.object,
  leftChildren: PropTypes.node,
  rightStyle: PropTypes.object,
  rightChildren: PropTypes.node,
  bodyStyle: PropTypes.object,
  title: PropTypes.string,
};

CustomHeader.defaultProps = {
  headerStyle: {
    backgroundColor: MainPalette.white,
  },
  leftStyle: { color: MainPalette.mineShaft },
  leftChildren: null,
  rightStyle: { color: MainPalette.mineShaft },
  rightChildren: null,
  bodyStyle: { color: MainPalette.mineShaft },
  title: '',
};

export default CustomHeader;
