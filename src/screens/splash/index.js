import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import image from '../../assets/Home.jpg';
import HomePage from '../Home';
import WelcomeScreen from '../WelcomeScreen';
import Signin from '../signin';




const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
    
        navigation.navigate('HomePage'); 
      
    }, 3000) 
  }, []); 

  return (
    <ImageBackground style={styles.bgImage} source={image}>
      <Text style={styles.heading}>Ecommerce App</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: 'contain',
    padding: 16,
    height: '100%', 
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Splash;
