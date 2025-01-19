import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
const Input = props => {
  const {icon: Icon} = props;
  return (
    <View style={styles.container}>
      <View
        style={{
         
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
    borderRadius:100,
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:7,
    borderColor: AppColors.Neutral.Gray,
  },
  input: {
    backgroundColor: AppColors.Neutral.White,
    padding: 15,
    borderRadius: 100,
    flex: 1,
    paddingLeft: 20,
  },
});

export default Input;
