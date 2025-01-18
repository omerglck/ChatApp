import * as React from 'react';
import {ONBOARDING, VERIFICATIONPHONENUMBER} from '../utils/routes';
import Onboarding from '../screens/app/onBoarding';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VerificationPhoneNumber from '../screens/setUp/verificationPhoneNumber';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ONBOARDING} component={Onboarding} />
      <Stack.Screen name={VERIFICATIONPHONENUMBER} component={VerificationPhoneNumber} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
