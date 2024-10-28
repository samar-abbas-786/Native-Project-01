import { View } from 'react-native'
import React from 'react'
import { AppToolBar } from '../../../components/appToolBar'

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
        <AppToolBar label='Nearby Stores' navigation={navigation} />
        
    </View>
  )
}

export default WelcomeScreen;