import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function fullRoundedButton({imageUrl}) {
  return (
    <View>
      <Text>
        <Image style={styles.round} source={imageUrl}/>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    round:{
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:'red'
    }
})