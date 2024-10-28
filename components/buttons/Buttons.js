import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Buttons({label,border=false,onPress,wd}) {
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
      <Text style={[styles.LoginButton,{backgroundColor:border ? 'white' : '#1b87bd',width:wd,color:border?'black':'white',borderColor:border?'black':'white',borderWidth:border?1:0}]}>
        {label}
      </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    LoginButton:{
         borderRadius:40,
         paddingVertical:10,
         color:'#FFFFFF',
         fontSize:14,
         textAlign:'center',
         fontWeight:'bold',
         marginVertical:10,
    }
})