import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { AppToolBar } from '../../../components/appToolBar'
import FormInput from '../../../components/FormInput'
import Buttons from '../../../components/buttons/Buttons'
import UserIcon from 'react-native-vector-icons/FontAwesome5'
import Email from 'react-native-vector-icons/MaterialCommunityIcons'
import Phone from 'react-native-vector-icons/Entypo';
import Password from 'react-native-vector-icons/MaterialIcons';
import SelectComp from '../../../components/SelectComp'
import { launchImageLibrary } from 'react-native-image-picker'
import Gallery from 'react-native-vector-icons/FontAwesome';
import Check from 'react-native-vector-icons/AntDesign';






const MyShop = ({navigation,secureTextEntry,type,label,border=false,wd,onPress,Checkkr}) => {

  const [shopImage,setShopImage]=useState();
  const[check,setCheck]=useState(false);
  async function handlePress(){
    const result=await launchImageLibrary();
    if(result.didCancel){
    setCheck(false);
      return;
    }
    if(result){
    console.log(result);
    setShopImage(result);
    setCheck(true);
    }

  }
  return (
    <View>
     <AppToolBar navigation={navigation} label="My Shop" />
     <View style={{padding:25,marginTop:10,color:'black' }}>
      <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d5d8dc',marginTop:5}}>
        <UserIcon name='user-alt' size={17} style={{color:'gray'}} />
     <FormInput type="default"  placeholder="username" />
     </View>
     <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d5d8dc' ,marginTop:5}}>
     <Email name='email' size={17} style={{color:'gray'}} />
     <FormInput type="email-address"  placeholder="Email" />
     </View>
     <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d5d8dc' ,marginTop:5}}>
      <Phone name='phone' size={17} style={{color:'gray'}} />
     <FormInput type="phone-pad"  placeholder="Ph no." />
     </View>
     <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d5d8dc' ,marginTop:5}}>
     <Password name='password' size={17} style={{color:'gray'}} />

     <FormInput secureTextEntry={true} placeholder="password" />
     </View>
     <SelectComp Checkkr={check? <Check name='checkcircle' size={18} style={{color:'#22bf0c'}} /> : null} image={<Gallery name='image' size={17} style={{color:'gray'}} />} label="Upload you Shop Image" onPress={handlePress}/>

     <Buttons label="Submit"/>


     </View>
    </View>
  )
}

export default MyShop