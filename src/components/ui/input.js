import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
const Input = props => {
  const {icon: Icon} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          resizeMode: 'contain',
          zIndex: 99,
          left: 10,
        }}>
       {Icon && <Icon />}
      </View>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: AppColors.Neutral.White,
    padding: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: AppColors.Brand.Black,
    flex: 1,
    paddingLeft: 40,
  },
});

export default Input;
