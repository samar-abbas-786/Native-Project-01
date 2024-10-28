import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/splash'; // ensure the correct path is used
import Signin from './src/screens/signin';
import SignUp from './src/screens/SignUp';
import Password from './components/password';
import SideDrawer from './components/Sidebar/drawer'; // Assuming this is the drawer component you want to use
import CardDetails from './components/card-details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        
       

        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="CardDetails"
          component={CardDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainNavigator() {
  return (
    <SideDrawer /> 
  );
}

export default App;
