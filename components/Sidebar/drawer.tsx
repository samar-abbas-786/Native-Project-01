import React from 'react'
// import Splash from '../../src/screens/splash'
import {createDrawerNavigator} from '@react-navigation/drawer'
// import Signin from '../../src/screens/signin';
import WelcomeScreen from '../../src/screens/WelcomeScreen';

// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
// import SignUp from '../../src/screens/SignUp'
import CustomDrawerContent from './customDrawer'
import MyShop from '../../src/screens/MyShopScreen';
import HomePage from '../../src/screens/Home';
const Drawer=createDrawerNavigator();

export default function SideDrawer() {

    return (
    <Drawer.Navigator 
    drawerContent={props=><CustomDrawerContent{...props}/>}
    screenOptions={{
        drawerActiveTintColor:'white',
        drawerActiveBackgroundColor:'#167caf',
        drawerInactiveTintColor:'White',

      }} initialRouteName='WelcomeScreen'>
                <Drawer.Screen options={{headerShown:false}} name='Homepage' component={HomePage}></Drawer.Screen>
        <Drawer.Screen options={{headerShown:false}} name='WelcomeScreen' component={WelcomeScreen}></Drawer.Screen>
        <Drawer.Screen options={{headerShown:false}} name='MyShop' component={MyShop}></Drawer.Screen>


    </Drawer.Navigator >
    )
  
}

