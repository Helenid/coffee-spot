import React from 'react';
import { ImageBackground, StyleSheet,View } from 'react-native';

const Background = ({ children, imageSource, style }) => {
  return (
    <ImageBackground
      source={imageSource || require('../assets/coffee.png')}
      resizeMode="cover"
      style={[styles.background, style]}
    >
      <View style={styles.overlay}/>
      <View style={styles.content}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
   overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  content: {
    flex: 1,
    zIndex: 1, 
  },
});