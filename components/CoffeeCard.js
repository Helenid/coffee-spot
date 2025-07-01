import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const CoffeeCard = ({ image, category,label, price, rate }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={{paddingHorizontal:10}}>
        <View style={styles.info}>
          <Text style={styles.category}>{category}</Text>
            <View style={styles.rateContainer}>
              <Ionicons name="star" size={14} color="#674736" />
              <Text style={styles.rate}>{rate}</Text>
            </View>
        </View>
          <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <View style={styles.add}>
            <TouchableOpacity>
             <AntDesign name="plus" size={20} color="#fff"/>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  );
};

export default CoffeeCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: 160,
    height: 240,
    borderRadius: 15,
    backgroundColor: '#F1EB9F',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  info: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:5
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  category:{
    fontWeight: 'bold',
    fontSize: 16,
    
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rate: {
    fontSize: 16,
    color: '#000',
    fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5
  },
  add:{
    alignSelf:'center',
    backgroundColor: "#674736",
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    marginTop: 10,
    padding:3
  }
});
