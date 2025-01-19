import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Avatar from '../ui/avatar';
import AppColors from '../../utils/colors';
import Badge from '../ui/badge';

const MessageCard = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Avatar name={item.name} surname={item.surname}/>
      </View>
      <View style={styles.message}>
        <Text style={styles.person}>{item.name}</Text>
        <Text style={styles.personMessage}>{item.message}</Text>
      </View>
      <View style={styles.messageTime}>
        <Text style={styles.messageTimeText}>{item.time}</Text>
        {item.count ? <Badge count={item.count}/> : <Text></Text>}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical:10
  },
  message:{flex:1,paddingVertical:5,paddingLeft:10,justifyContent:"space-around"},
  person:{
    fontSize:20,
    letterSpacing:1.5
  },
  personMessage:{color:AppColors.Neutral.Gray,fontSize:18},
  messageTime:{alignItems:"flex-end",justifyContent:"space-around"},
  messageTimeText:{color:AppColors.Neutral.Gray,fontSize:14},
});

export default MessageCard;
