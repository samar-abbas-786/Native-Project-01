import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.heading}>Trending Places</Text>
      <View style={[styles.card,styles.Elevated]}>
      
      <Image source={{
        uri:'https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?ga=GA1.1.1060511683.1728674456&semt=ais_hybrid'
      }} style={styles.cardImage}/>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Taj Mahal</Text>
        <Text style={styles.cardLabel}>The symphony of love </Text>
        <Text style={styles.cardDes}>The Taj Mahal is known as a monument of love and a grieving emperor's ode to his beloved deceased queen.</Text>
        <Text style={styles.cardFooter}>Agra</Text>


      </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        fontWeight:'bold',
        padding:10
    },
    cardImage:{
        height:180,
        borderRadius:10

        
       
    },
    Elevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }

    },
    card:{
        height:350,
        width:350,
        borderRadius:10,
        maxWidth:'95%',
        alignSelf:'center'

        
        
    },
    cardBody:{
        color:'#000000',
        paddingHorizontal:12,
        flex:1,
        flexGrow:2
    },
    cardTitle:{color:'#000000',fontSize:22,fontWeight:'bold',marginBottom:4},
    cardLabel:{color:'#000000',fontSize:16,fontWeight:'500',marginBottom:4,},
    cardDes:{color:'#697565',fontSize:13,marginBottom:14,marginTop:3},
    cardFooter:{color:'#000000',fontSize:15}
    

})