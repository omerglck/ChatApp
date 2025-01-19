import * as React from 'react';
import {
  ONBOARDING,
  SETUPNAME,
  SETUPPHOTO,
  TABMENU,
  VERIFICATIONPHONENUMBER,
} from '../utils/routes';
import Onboarding from '../screens/app/onBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerificationPhoneNumber from '../screens/setUp/verificationPhoneNumber';
import SetUpName from '../screens/setUp/setUpName';
import SetUpPhoto from '../screens/setUp/setUpPhoto';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={TABMENU} component={TabNavigator} />
      <Stack.Screen name={ONBOARDING} component={Onboarding} />
      <Stack.Screen
        name={VERIFICATIONPHONENUMBER}
        component={VerificationPhoneNumber}
      />
      <Stack.Screen name={SETUPNAME} component={SetUpName} />
      <Stack.Screen name={SETUPPHOTO} component={SetUpPhoto} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
