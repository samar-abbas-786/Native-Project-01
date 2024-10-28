import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../../../components/InputField/input'
import Buttons from '../../../components/buttons/Buttons';
import LinearGradient from 'react-native-linear-gradient';

export default function SignUp() {
  return (
    <LinearGradient start={{x:0,y:0}} end={{x:1,y:1}} colors={['#262626','black','#262626','black','black']} style={styles.top}>
      <View>
      <Text style={styles.heading}>SignUp</Text>
      <Text style={{color:'gray'}}>SignUp Here</Text>
      <View style={styles.textInput}>
      {/* <Input  placeHolder={'Enter Your name'}/> */}
      <Input  placeHolder={'Enter Your email'}/>
      <Input secureTextEntry={'true'}  placeHolder={'Enter your password'}/>
      <Buttons label={'login'}/>
      </View>
      </View>

         </LinearGradient>
  )
}

const styles = StyleSheet.create({
    top:{
        padding:5,
        flex:1
    },
    heading: {
        fontSize: 28,
        padding:20,
        fontWeight: 'bold',
        color: 'white',
      },
      textInput:{
        marginTop:140,

      },
})