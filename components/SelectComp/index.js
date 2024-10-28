import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const SelectComp = ({onPress,image,label,Checkkr}) => {

  return (
    <TouchableOpacity onPress={()=>onPress()}>
        <View style={{flexDirection:'row',marginTop:20,borderBottomWidth:1,paddingVertical:10,borderBottomColor:'#d5d8dc',paddingHorizontal:5,alignItems:'center'}}>
        {image}
        <Text style={{color:'gray',paddingLeft:20}}>
            {label}
        </Text>
        <Text style={{marginLeft:80}}>{Checkkr}</Text>
        </View>
     
    </TouchableOpacity>
  )
}

export default SelectComp