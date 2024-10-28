import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@/vector-icons'; // Example icon set (replace with your preferred one)
import SignUp from '../../src/screens/SignUp';
import Signin from '../../src/screens/signin';
import Splash from '../../src/screens/splash';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'SignUp') {
            iconName = 'person-add-outline'; // Example icon for SignUp
          } else if (route.name === 'Signin') {
            iconName = 'log-in-outline'; // Example icon for Signin
          } else if (route.name === 'Splash') {
            iconName = 'water-outline'; // Example icon for Splash
          }

          // Return the icon component
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Customize active tab color
        tabBarInactiveTintColor: 'gray', // Customize inactive tab color
      })}
    >
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="Signin" component={Signin} />
      <Tab.Screen name="Splash" component={Splash} />
    </Tab.Navigator>
  );
}
