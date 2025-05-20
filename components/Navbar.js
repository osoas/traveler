
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../app/index' 


import Icon from '@mdi/react';
import { mdiHomeAccount } from '@mdi/js';

<Icon path={mdiHomeAccount} size={1} />


const Tab = createBottomTabNavigator();

export default function navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={LoginScreen}>
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name=" mdiHomeAccountu" color={color} size={size} />
            ),
          }}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
