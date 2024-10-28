import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const Hero = ({image}) => {
  return (
    <View style={{marginTop:30,alignContent:'center'}}>
        <Image style={{height:200,width:340,borderRadius:14}} source={{uri:image}} />
    </View>
  )
}

export default Hero;