import { Linking, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(webLink:string){
        Linking.openURL(webLink)
    }
  return (
    <View>
      <Text style={styles.Heading}>Blog Cards</Text>

      <View style={styles.allCard} id='all-cards'>
      <TouchableOpacity onLongPress={()=>openWebsite('https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html')}>
        <View style={styles.singleCard} id='single-card'>
            <Text style={styles.cardTitle} id='Card-Headline'>Cyber Security</Text>
            <Image style={styles.blogImage} source={{
                uri:'https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}></Image>
            <Text numberOfLines={3} style={styles.cardDes}>The rise in digital cyberattacks has made cybersecurity a priority for businesses and individuals. For businesses, cybercrimes can lead to financial loss, operational disruption, data breaches, and a loss of trust, while individuals face identity theft, financial fraud, and privacy invasion.</Text>
           
         <TouchableOpacity onPress={()=>openWebsite('https://www.cisco.com/site/us/en/learn/topics/security/what-is-cybersecurity.html')}><Text style={styles.button}>Read More</Text></TouchableOpacity>
           
        </View>
        </TouchableOpacity>

        <TouchableOpacity onLongPress={()=>openWebsite('https://ai.google/discover/generativeai/')}>
        <View style={styles.singleCard} id='single-card'>
            <Text style={styles.cardTitle} id='Card-Headline'>Generative AI</Text>
            <Image style={styles.blogImage} source={{
                uri:'https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524398.jpg?ga=GA1.1.1060511683.1728674456&semt=ais_hybrid'
            }}></Image>
            <Text numberOfLines={3} style={styles.cardDes}>Historically, AI was used to understand and recommend information. Now, generative AI can also help us create new content. Generative AI builds on existing technologies, like large language models (LLMs) which are trained on large amounts of text and learn to predict the next word in a sentence.</Text>
           
         <TouchableOpacity onPress={()=>openWebsite('https://ai.google/discover/generativeai/')}><Text style={styles.button}>Read More</Text></TouchableOpacity>
           
        </View>
        </TouchableOpacity>

        <TouchableOpacity onLongPress={()=>openWebsite('https://en.wikipedia.org/wiki/Cloud_computing')}>
        <View style={styles.singleCard} id='single-card'>
            <Text style={styles.cardTitle} id='Card-Headline'>Cloud Computing</Text>
            <Image style={styles.blogImage} source={{
                uri:'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}></Image>
            <Text numberOfLines={3} style={styles.cardDes}>Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center.</Text>
           
         <TouchableOpacity onPress={()=>openWebsite('https://en.wikipedia.org/wiki/Cloud_computing')}><Text style={styles.button}>Read More</Text></TouchableOpacity>
           
        </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Heading:{
        fontSize:25,
        fontWeight:'bold',
        padding:12,
        color:'#FFF',
       marginVertical:10,
        // alignSelf:'center'
    },
    allCard:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50
        
    },
    singleCard:{
        height:340,
        width:'90%',
        backgroundColor:'#DDE6ED',
        borderRadius:10,
        marginVertical:25
        
        
    },
    cardTitle:{
        fontSize:23,
         color:'black',
         fontWeight:'bold',
         alignSelf:'center',
         
    },
    blogImage:{
        height:180,
        
    },
    cardDes:{
        color:'black',
        marginTop:8,
        marginBottom:6,
        fontSize:13,
        color:'#3C3D37',
        paddingLeft:10, 
        fontWeight:'300'  
    },
    button:{
        fontSize:14,
        color:"white",
        alignSelf:'center',
        backgroundColor:'#1A3636',
        paddingVertical:6,
        borderRadius:4,
        paddingHorizontal:14,
        marginTop:6

    }
})