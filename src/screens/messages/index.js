import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../../components/router/header';
import AppColors from '../../utils/colors';
import SearchIcon from '../../assets/icons/Search/Search.svg';
import FloatActionButton from '../../components/ui/floatActionButton';
import Edit from '../../assets/icons/Edit/Edit.svg';
import {messages} from '../../utils/mockData';
import MessageCard from '../../components/messages/messageCard';

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
      <Header
        left={<Text style={{fontSize: 24, marginLeft: 10}}>Messages</Text>}
        right={
          <Pressable style={{marginRight: 10}}>
            <SearchIcon />
          </Pressable>
        }
      />
      </View>
      <View style={styles.listContainer}>
      <FlatList
        data={messages}
        renderItem={({item}) => <MessageCard item={item}/>}
      />
      </View>
      <FloatActionButton icon={Edit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutral.White,
  },
  headerContainer:{
    flex:1,
  },
  listContainer:{
    flex:10,
  }
});

export default Messages;
