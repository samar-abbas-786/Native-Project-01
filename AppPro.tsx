import React from "react";
import {View,Text,StyleSheet,useColorScheme} from 'react-native'

function AppPro():JSX.Element{

    const isDarkMode=useColorScheme()==='light'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode?styles.WhiteText:styles.DarkText}>Hello This is AppPRo</Text>
        </View>

    )

};

const styles=StyleSheet.create({
    container:{
     flex:1,
     alignItems:'center',
     fontSize:20,
     justifyContent:'center',
     backgroundColor:'white'
    },
    WhiteText:{
        color:'#FFFFFF',
    },
    DarkText:{
        color:'#000000',
    },
})
export default AppPro;