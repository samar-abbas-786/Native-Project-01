import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function input({placeHolder,keyBoardType='default',secure=false}) {
  return (
    <View style={{borderBottomColor:'gray',borderBottomWidth:1,color:'black',marginBottom:10}}>
     <TextInput secureTextEntry={secure} keyboardType={keyBoardType} style={{color:'white'}} placeholderTextColor="#888" placeholder={placeHolder}/>
    </View>
  )
}

const styles = StyleSheet.create({})