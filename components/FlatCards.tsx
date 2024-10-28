import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
      {/* <View  style={styles.container}> */}
      <View style={[styles.card,styles.cardOne]}>
      <Text>Red</Text>
      </View>

      <View style={[styles.card,styles.cardTwo]}>
      <Text>blue</Text>
      </View>

      <View style={[styles.card,styles.cardThree]}>
      <Text>Green</Text>
      </View>

      <View style={[styles.card,styles.cardTwo]}>
      <Text>Orange</Text>
      </View>

      <View style={[styles.card,styles.cardTwo]}>
      <Text>blue</Text>
      </View>

      <View style={[styles.card,styles.cardTwo]}>
      <Text>blue</Text>
      </View>

      <View style={[styles.card,styles.cardTwo]}>
      <Text>blue</Text>
      </View>
      </ScrollView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        padding:10,
        fontWeight:'bold'
    },
    container:{
    //    flexDirection:'row',
    //    display:'flex',
    //    alignItems:'center',
    //    justifyContent:'space-evenly',
       
    },
    card:{
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:7,
        margin:8
    },
    cardOne:{
        backgroundColor:'red'
    },
    cardTwo:{
        backgroundColor:'blue'
    },
    cardThree:{
        backgroundColor:'green'
    }


    
})