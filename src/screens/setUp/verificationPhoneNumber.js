import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import AppColors from '../../utils/colors';
import Input from '../../components/ui/input';
import Region from '../../assets/icons/Region/Region.svg';
import Phone from '../../assets/icons/Phone/Phone.svg';


const VerificationPhoneNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Enter your phone number" size={24} />
        <SectionDescription text="Please confirm your region and enter your phone number." />
      </View>

      <View style={styles.body}>
        <Input placeholder="use placeholder" icon={Region}/>
        <Input placeholder="use placeholder" keyboardType="number-pad" icon={Phone}/>
      </View>

      <View style={{}}>
        <Button
          title="Continue"
          size="large"
          onPress={() => navigation.replace(VERIFICATIONPHONENUMBER)}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: AppColors.Brand.White,
    padding: 30,
  },
  header: {flex: 1, justifyContent: 'center', alignItems: 'center',marginTop:30},
  body: {flex: 4, justifyContent: "flex-start", gap: 10},
})

export default VerificationPhoneNumber;
