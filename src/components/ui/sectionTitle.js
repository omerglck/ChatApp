import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';

const SectionTitle = props => {
  const {text,size=24} = props;
  return (
    <View style={styles.text}>
      <Text style={[styles.text,{fontSize:size}]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontWeight:"normal",
    color: AppColors.Neutral.Black,
  },
});

export default SectionTitle;
