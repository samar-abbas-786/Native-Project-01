import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Password must have atLeast 4 number')
    .max(16, 'Maximum 16 numbers are allowes')
    .required('The Length is required'),
});

export default function Password() {
  const [upperCase,setUppercase]=useState(false);
  const [numbers,setNumbers]=useState(false);
  const[lowerCase,setLowerCase]=useState(true);
  const [symbols,setSymbols]=useState(false);
  const [isPasswordGenerated,setIsPasswordGenerated]=useState(false);
  const[password,setPassword]=useState('');



  

  const generatePasswordString=(passwordLength:number)=>{
    let charList='';
    const upperCaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars='abcdefghijklmnopqrstuvwxyz';
    const digitCharsChars='0123456789';
    const symbolsChars='!@#$%^&*()_+';

    if (upperCase) {
      charList+=upperCaseChars;
    }
    if (lowerCase) {
      charList+=lowerCaseChars;
    }
    if (symbols) {
      charList+=symbolsChars;
    }
    if (numbers) {
      charList+=digitCharsChars;
    }
   const passwordResult=createPassword(charList,passwordLength);
   setPassword(passwordResult);
   setIsPasswordGenerated(true);

  };

  const createPassword=(characters:String,passwordLength:number)=>{
    let result='';
    for (let i = 0; i < passwordLength; i++) {
  const characterIndex=Math.round(Math.random() * characters.length);     
   result+=characters.charAt(characterIndex);
    }
    return result;
  };
  
  
  
  const resetPassword=(passwordLength:number)=>{
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setNumbers(false);
    setSymbols(false);
    setUppercase(false)
  }

  return (
    <View>
      <Text>password</Text>
    </View>
  )
}

const styles = StyleSheet.create({})