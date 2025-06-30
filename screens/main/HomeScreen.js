import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import HomeScreenBottomTab from '../../components/HomeScreenBottomTab'; 
import { Ionicons } from '@expo/vector-icons'; 

const categories = [
  'Cappuccino',
  'Latte',
  'Americano',
  'Espresso',
  'Mocha',
  'Cortado',
  'Affogato',
  'Flat white',
];

const coffees = [
  {
    id:1,
    image:require('../../assets/coffee1.jpg'),
    rate: 5,
    price: '$3.60',
    category:'Cappuccino'
  },
  {
    id:2,
    image:require('../../assets/coffee2.jpeg'),
    rate: 4.5,
    price: '$3.60',
     category:'Cappuccino'
  },
]

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cappuccino');

  const filteredCoffee = selectedCategory === 'Cappuccino' ? coffees : coffees.filter((coffee) => coffee.category === selectedCategory);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../assets/brownLogo.webp')} style={styles.logo} />
          <Image source={require('../../assets/Helena.jpg')} style={styles.user} />
        </View>
        <Text style={styles.greeting}>Hi Anna,</Text>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.icon} />
          <TextInput
            placeholder='Find your best coffee'
            style={styles.input}
          />
        </View>
        <FlatList 
          horizontal
          data={categories}
          keyExtractor ={(item) => item}
          contentContainerStyle={{marginBottom: 20}}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              style={[
                styles.categoryButton, selectedCategory === item && styles.activeCategory,
              ]}
              ><Text style={{color:'#fff'}}>{item}</Text></TouchableOpacity>
          )}
        />
        <HomeScreenBottomTab />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight:'bold'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EB9F',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginVertical: 10,
  },
  categoryButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#F1EB9F',
    borderRadius: 20,
    marginRight: 10,
  },
  activeCategory: {
    backgroundColor:'#674736',
  },
  
  
});