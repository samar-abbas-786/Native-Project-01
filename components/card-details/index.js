import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { AppToolBar } from '../appToolBar';

const CardDetails = ({ route,navigation }) => {
  const { title, price, category, description, image } = route.params;
   const req=title.substring(0,16)+"...";
  return (
    <View style={styles.container}>
      <AppToolBar navigation={navigation} label={req} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image resizeMode='cover' style={styles.productImage} source={{ uri: image }} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.description}>
              <Text style={styles.label}>Product Description:</Text> {description}
            </Text>
            <Text style={styles.category}>
              <Text style={styles.label}>Category:</Text> {category}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  productImage: {
    height: 300,
    width: '100%',
    borderRadius: 12,
  },
  textContainer: {
    paddingTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FF5722', // Accent color
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginTop: 15,
    textAlign: 'center',
  },
  category: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },
  label: {
    fontWeight: '700',
    color: '#333',
  },
});

export default CardDetails;
