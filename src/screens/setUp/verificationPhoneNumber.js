import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SectionTitle from '../../components/ui/sectionTitle';
import SectionDescription from '../../components/ui/sectionDescription';
import Button from '../../components/ui/button';
import AppColors from '../../utils/colors';
import Input from '../../components/ui/input';
import Region from '../../assets/icons/Region/Region.svg';
import Phone from '../../assets/icons/Phone/Phone.svg';
import { SETUPNAME } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const VerificationPhoneNumber = () => {
  const [countryCode, setCountryCode] = useState('Turkey (+90)');
  const [phone, setPhone] = useState('234234234234');
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionTitle text="Enter your phone number" size={24} />
        <SectionDescription text="Please confirm your region and enter your phone number." />
      </View>

      <View style={styles.body}>
        <Input
          placeholder=""
          editable={false}
          icon={Region}
          value={countryCode}
        />
        <Input
          value={phone}
          placeholder="Phone Number"
          keyboardType="number-pad"
          icon={Phone}
          onChangeText={text => setPhone(text)}
        />
      </View>

      <View style={{}}>
        <Button
          title="Continue"
          size="large"
          onPress={() => navigation.navigate(SETUPNAME,{phone:phone})}
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
});

export default VerificationPhoneNumber;
