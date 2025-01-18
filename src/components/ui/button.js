import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const Button = props => {
  const {
    size,
    status = 'primary',
    appearance = 'filled',
    icon,
    title = '',
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        size == 'medium'
          ? styles.mediumButtonContainer
          : styles.largeButtonContainer,
      ]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    margin: 2,
  },
  largeButtonContainer: {
    backgroundColor: AppColors.Brand.Black,
    padding: 20,
  },
  mediumButtonContainer: {
    backgroundColor: AppColors.Brand.Black,
    padding: 10,
  },
  smallButtonContainer: {
    padding: 5,
  },
  title: {
    color: AppColors.Brand.White,
    fontSize: 18,
    fontWeight: 500,
  },
});

export default Button;
