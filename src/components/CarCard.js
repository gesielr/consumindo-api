import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CarCard = ({ name, image, price }) => {
    const imageUrl = `https://digitalinnovationone.github.io/fake-data-api-lamborghini/assets/${image}.png`;
  
    return (
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy This</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#1e1e1e',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 120,
      resizeMode: 'contain',
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
      marginVertical: 10,
    },
    price: {
      fontSize: 16,
      color: '#00b894',
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#00b894',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default CarCard;
  