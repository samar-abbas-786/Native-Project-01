import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import Buttons from '../buttons/Buttons';
import {CardDetails} from '../card-details/index'
const CardView = ({
  title,
  price,
  category,
  description,
  image,
  label,
  wd,
  navigation,
  onPress,
}) => {
  const req=title.substring(0,16)+"...";
  function ViewCard() {
    navigation.navigate('CardDetails',
      {title,
      price,
      category,
      description,
      image,});
  }
  return (
    <View style={{padding: 15}}>
      <View
        style={{
          height: 325,
          width: 260,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <Image
          style={{height: 200, width: 150}}
          resizeMode="cover"
          source={{uri: image}}
        />
        <Text style={{color: 'black', fontWeight: 'bold', marginTop: 5}}>
          {req}
        </Text>
        <Text style={{color: 'red',fontSize:16}}>${price}</Text>
        <TouchableOpacity onPress={onPress}>
          <Buttons
            onPress={() => ViewCard()}
            border={true}
            wd={100}
            label="View"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardView;
