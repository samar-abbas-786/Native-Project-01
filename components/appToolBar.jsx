import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import Ioicons from 'react-native-vector-icons/Ionicons'

export  const AppToolBar = ({navigation,label}) => {
  return (
    <View style={{padding:10,backgroundColor:'#1b87bd',flexDirection:'row',alignItems:'center'}}> 
    <View style={{flex:0.3}}>
    <TouchableWithoutFeedback onPress={()=>navigation.openDrawer()}>
   <Ioicons style={{color:'white'}} name='reorder-three-outline' size={30} />
   </TouchableWithoutFeedback>
   </View>
   <View style={{flex:0.7}}>
   <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>{label}</Text>
   </View>
   </View>
  )
}
