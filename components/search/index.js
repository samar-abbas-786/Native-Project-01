
import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler';
import SearchIcon from 'react-native-vector-icons/FontAwesome5'

const Search = () => {
    function OnSearch(text){
        
    }

  return (
    <View  style={{height:50,backgroundColor:'#f2f4f4',borderColor:'gray',borderWidth:1,opacity:0.7,borderRadius:10,flexDirection:'row',alignItems:'center',paddingLeft:10}}> 
        <SearchIcon size={20} name='search' style={{color:'black'}} />
      <TextInput onChangeText={(text)=>OnSearch(text)}  returnKeyType='search' style={{fontSize:18,paddingLeft:20,color:'black'}} placeholderTextColor='black' placeholder='Search' ></TextInput>
    </View>
  )
}

export default Search;