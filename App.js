import { StatusBar } from 'react-native';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import AppColors from './src/utils/colors';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"}/>
      <RootNavigator />
    </NavigationContainer>
  );
}

