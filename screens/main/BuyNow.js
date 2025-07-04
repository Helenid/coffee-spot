import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const BuyNow = ({ navigation }) => {
  return (
    <ImageBackground 
    source={require('../../assets/coffee.png')}
    resizeMethod='cover'
    style={styles.background}>
      <View style={styles.overlay}/>
      <View style={styles.content}> 
        <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color:'#fff', fontSize:26, marginBottom:20 }}>Thank you coffee lover!</Text>
          <Text style={{color:'#fff', fontSize:24, textAlign:'center', marginBottom:40}}>You have placed your order Successfully</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{backgroundColor:'#fff', padding:10, fontSize:16, color:'#674736', fontWeight:'bold', borderRadius:5}}>View More Options</Text>
          </TouchableOpacity>
        </View>    
      </View>

    </ImageBackground>
  )
}

export default BuyNow

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '120%',
  },
   overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  content: {
    flex: 1,
    zIndex: 1, 
    alignItems:"center",
    justifyContent:'center'
  },
})