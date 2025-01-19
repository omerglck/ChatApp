import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CALLS, CONTACTS, MESSAGES, PROFILE} from '../utils/routes';
import Messages from '../screens/messages';
import Profile from '../screens/profile';
import Contacts from '../screens/contacts';
import Calls from '../screens/calls';
import AppColors from '../utils/colors';
import TabBarIcon from '../components/router/tabBarIcon';
import Icon from '../components/ui/icon';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === MESSAGES) {
            iconName = focused ? 'messages-focused' : 'messages';
          } else if (route.name === CONTACTS) {
            iconName = focused ? 'users-focused' : 'users';
          } else if (route.name === CALLS) {
            iconName = focused ? 'calls-focused' : 'calls';
          } else if (route.name === PROFILE) {
            iconName = focused ? 'profile-focused' : 'profile';
          }

          return <TabBarIcon icon={iconName} />;
        },
        tabBarActiveTintColor: AppColors.Neutral.Black,
        tabBarInactiveTintColor: AppColors.Neutral.Gray,
        headerShown:false
      })}>
      <Tab.Screen name={MESSAGES} component={Messages} />
      <Tab.Screen name={CONTACTS} component={Contacts} />
      <Tab.Screen name={CALLS} component={Calls} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
