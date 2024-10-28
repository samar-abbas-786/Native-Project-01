import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

export default function ValidationSchema() {
  const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Password must have atLeast 4 number')
      .max(16, 'Maximum 16 numbers are allowes')
      .required('The Length is required'),
  });

  return (
    <View>
      <Text>Validation</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
