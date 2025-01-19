import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import { screenWidth } from '../../utils/constants';

const Badge = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.badgeText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.Neutral.Gray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:100,
    width:26,
    height:26,
    
  },
  badgeText:{
    color:AppColors.Neutral.White,
    fontSize:14
  }
});
export default Badge;
