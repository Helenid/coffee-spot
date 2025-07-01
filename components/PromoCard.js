// components/PromoCard.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const PromoCard = ({ image, headline, discountText, discountEnd, highlight }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode='cover'
      style={styles.cardBackground}
      imageStyle={{ borderRadius: 15 }}
    >
      <View style={styles.overlay}>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.discountLine}>
          {discountText} <Text style={styles.highlight}>{highlight}</Text> {discountEnd}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default PromoCard;

const styles = StyleSheet.create({
  cardBackground: {
    marginTop:20,
    width: 330,
    height: 180,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent:'center',
    marginRight: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
    ...StyleSheet.absoluteFillObject,
    justifyContent:'center',
    alignItems:'center'
  },
  headline: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  discountLine: {
    color: '#fff',
    fontSize: 20,
  },
  discountEnd: {
    color: '#fff',
    fontSize: 20,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#F1EB9F',
    fontSize: 22,
  },
});


