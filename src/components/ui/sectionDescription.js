import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const SectionDescription = props => {
  const {text, size = 18} = props;
  return (
    <View style={styles.text}>
      <Text style={[styles.text, {fontSize: size}]}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  text: {
    color: AppColors.Neutral.Gray,
    textAlign: 'center',
    margin: 10,
  },
});

export default SectionDescription;
