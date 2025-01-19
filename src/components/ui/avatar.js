import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import {screenWidth} from '../../utils/constants';
import {setAvatarText} from '../../utils/functions';

const Avatar = ({name,surname}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.avatarText}>{setAvatarText(name,surname)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.Brand.Gray,
    width: screenWidth / 6,
    height: screenWidth / 6,
    borderRadius: 100,
  },
  avatarText:{
    fontSize:24
  }
});

export default Avatar;
