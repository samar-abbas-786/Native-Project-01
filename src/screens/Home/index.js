import { View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppToolBar } from '../../../components/appToolBar';
import Search from '../../../components/search/index';
import CardView from '../../../components/cardView';
import Hero from '../../../components/Hero';
import Images from '../../HeroImagesArray/index.json';

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [heroImage, setHeroImage] = useState(Images.images[0]?.img);
 
  

  const incrementCount = () => setCount((c) => (c + 1) % Images.images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImage(Images.images[count]?.img);
      incrementCount();
    }, 4500);

    return () => clearInterval(interval);
  }, [count]);
  function Next(){
    incrementCount();
    setHeroImage(Images.images[count]?.img);

  }

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
                <ScrollView>

      <AppToolBar label="Home" navigation={navigation} />
      <View style={{ padding: 10, marginTop: 10 }}>
        <Search />
        <TouchableWithoutFeedback onPress={()=>Next()}>
          <View>
            <Hero image={heroImage} />
          </View>
          </TouchableWithoutFeedback>
       
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 40,
            marginLeft: 19,
            textShadowColor:'gray',
            textShadowRadius:6,
          }}>
          Trending Products
        </Text>
        <ScrollView horizontal={true}>
          {data.map((item) => (
            <View key={item.id}>
              <CardView
                navigation={navigation}
                price={item.price}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      </ScrollView>

    </View>
  );
};

export default HomePage;
