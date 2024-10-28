import { View, Text, TextInput,Image } from 'react-native'
import React from 'react'

const FormInput = ({placeholder,type = 'default',secureTextEntry=false},Icon) => {
  return (
    <View>
        <TextInput secureTextEntry={secureTextEntry}  keyboardType={type}  placeholderTextColor="#888" style={{borderBottomColor:'#d5d8dc',fontSize:14,color:'black',paddingLeft:20}} placeholder={placeholder} ></TextInput>
    </View>
  )
}

export default FormInput