import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import AppColors from '../../utils/colors';
import Input from '../../components/ui/input';
import User from '../../assets/icons/User/User.svg';
import { SETUPPHOTO } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';
const SetUpName = () => {
  const [name, setName] = useState('Ömer Gölçek');
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Create your name" size={24} />
        <SectionDescription text="Get more people to know your name." />
        <Text style={styles.pageNumber}>1 of 2</Text>
      </View>

      <View style={styles.body}>
        <Input
          value={name}
          placeholder="Full Name"
          icon={User}
          onChangeText={text => setName(text)}
        />
      </View>

      <View style={{}}>
        <Button
          title="Continue"
          size="large"
          onPress={() => navigation.navigate(SETUPPHOTO)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Brand.White,
    padding: 30,
    
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  body: {flex: 4, justifyContent: 'flex-start', gap: 10},
  pageNumber:{
    position: 'absolute',
    top: -15,
    right: 10,
    fontSize: 14,
    fontWeight:"500",
    color:"#D8D8D8"
  }
});

export default SetUpName;
