import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import { View,Image,Text } from 'react-native';
  export default function CustomDrawerContent(props) {
    return (
      <View style={{flex:1,backgroundColor:'#1b87bd',padding:4}}>
        <Image  style={{marginTop:20,height:40,width:40,alignSelf:'center'}} source={require('../../src/assets/profile.png')}/>
        <Text style={{paddingLeft:10,textAlign:'center',fontWeight:'bold',marginTop:5,fontSize:20}}>Samar Abbas</Text>
        <Text style={{paddingLeft:10,textAlign:'center',fontWeight:'bold',marginTop:5,fontSize:15}}>samarabbas172003@gmail.com</Text>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      </View>
    );
  }