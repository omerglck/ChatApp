import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import AppColors from '../../utils/colors';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import Frends from '../../assets/images/frends.svg';
import { useNavigation } from '@react-navigation/native';
import { VERIFICATIONPHONENUMBER } from '../../utils/routes';

const Onboarding = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="What’s Up" size={32} />
      </View>

      <View style={styles.body}>
        <Frends />
        <SectionDescription text="Let's talk with your friends and family wherever and whenever" />
      </View>

      <View style={{}}>
        <Button
          title="Continue with phone"
          size="large"
          onPress={() => navigation.replace(VERIFICATIONPHONENUMBER)}
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
  header: {flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:40},
  body: {flex: 4, justifyContent: 'center', alignItems: 'center', gap: 20},
});
export default Onboarding;
