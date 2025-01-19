import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import {screenHeight, screenWidth} from '../../utils/constants';

const FloatActionButton = props => {
  const {icon: Icon} = props;
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {Icon ? <Icon /> : <Text>float</Text>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 2,
    position: 'absolute',
    zIndex: 99,
    bottom: 20,
    right: 20,
    backgroundColor: AppColors.Neutral.Black,
    width: screenWidth / 6,
    height: screenWidth / 6,
  },
});

export default FloatActionButton;
