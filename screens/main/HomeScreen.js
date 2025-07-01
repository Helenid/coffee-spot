import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, FlatList, TouchableOpacity,ScrollView } from 'react-native';
import HomeScreenBottomTab from '../../components/HomeScreenBottomTab'; 
import { Ionicons } from '@expo/vector-icons'; 
import CoffeeCard from '../../components/CoffeeCard';
import PromoCard from '../../components/PromoCard';


const categories = [
  'All',
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
    label: 'With oat milk',
    category:'Cappuccino'
  },
  {
    id:2,
    image:require('../../assets/coffee2.jpeg'),
    rate: 4.5,
    price: '$3.60',
    label: 'With milk',
     category:'Cappuccino'
  },
  {
    id:3,
    image:require('../../assets/coffee2.jpeg'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Cappuccino'
  },
  {
    id:4,
    image:require('../../assets/coffee3.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Latte'
  },
  {
    id:5,
    image:require('../../assets/coffee4.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With sugar',
     category:'Latte'
  },
  {
    id:6,
    image:require('../../assets/coffee5.jpg'),
    rate: 4.5,
    price: '$3.60',
    label:'With sugar',
     category:'Latte'
  },
  {
    id:7,
    image:require('../../assets/coffee6.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With sugar',
     category:'Americano'
  },
  {
    id:8,
    image:require('../../assets/coffee7.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Americano'
  },
  {
    id:9,
    image:require('../../assets/coffee8.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With ice',
     category:'Americano'
  },
  {
    id:10,
    image:require('../../assets/coffee9.jpg'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Espresso'
  },
  {
    id:11,
    image:require('../../assets/coffee10.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Espresso'
  },
  {
    id:12,
    image:require('../../assets/coffee12.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Espresso'
  },
  {
    id:13,
    image:require('../../assets/coffee11.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Mocha'
  },
  {
    id:14,
    image:require('../../assets/coffee13.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Mocha'
  },
  {
    id:15,
    image:require('../../assets/coffee14.jpeg'),
    rate: 4.5,
    price: '$3.60',
    label:'With honey',
     category:'Mocha'
  },
  {
    id:16,
    image:require('../../assets/coffee15.jpg'),
    rate: 4.5,
    price: '$3.60',
    label:'With ice',
     category:'Mocha'
  },
  {
    id:17,
    image:require('../../assets/coffee16.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With milk',
     category:'Cortado'
  },
  {
    id:18,
    image:require('../../assets/coffee17.jpg'),
    rate: 4.5,
    price: '$3.60',
    label:'With milk',
     category:'Cortado'
  },

  {
    id:20,
    image:require('../../assets/coffee19.jpeg'),
    rate: 4.5,
    price: '$3.60',
    label:'With milk',
     category:'Cortado'
  },
  {
    id:21,
    image:require('../../assets/coffee21.webp'),
    rate: 4.5,
    price: '$3.60',
    label:'With milk',
     category:'Cortado'
  },

];

const coffeeShops = [
  { id: 1,
    image: require('../../assets/coffee23.webp')
  },
  { id: 2,
    image: require('../../assets/coffee24.jpeg')
  },
  { id: 3,
    image: require('../../assets/coffee25.png')
  },
  // { id: 6,
  //   image: require('../../assets/coffee26.avif')
  // },
  { id: 7,
    image: require('../../assets/coffee27.jpeg')
  },
]

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCoffee, setSelectedCoffee] = useState(null)
  const [selectedId, setSelectedId] = useState(null)

  const filteredCoffee = selectedCategory === 'All' ? coffees : coffees.filter((coffee) => coffee.category === selectedCategory);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100}}>
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
        {/*Categories */}
        <View>
          <FlatList 
            horizontal
            data={categories}
            keyExtractor ={(item) => item}
            contentContainerStyle={{marginBottom:10}}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                style={[
                  styles.categoryButton, selectedCategory === item && styles.activeCategory,
                ]}
                ><Text style={[
                  styles.categoryText,
                  selectedCategory === item && styles.activeCategoryText
                ]}>{item}
                </Text>
              </TouchableOpacity>        
            )}
          />

        </View>
         {/*Cards */}
         <View>
          <FlatList 
            horizontal
            data={filteredCoffee}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{paddingHorizontal:10}}
            renderItem={({ item }) => (
              <CoffeeCard 
                image= {item.image}
                category={item.category}
                name={item.name}
                price={item.price}
                rate={item.rate}
                label={item.label}
              />
            )}
            ListEmptyComponent={
              <Text style={{textAlign:'center', fontSize: 18}}>This cup of Coffee has been exhausted.</Text>
            }
          />
         </View>
        <View> 
          <PromoCard
            image={require('../../assets/coffee22.webp')}
            headline="Special Offer This Weekend"
            discountText="Get"
            highlight="50%" 
            discountEnd="Off for New Users"
          />    
        </View>
        <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>Popular Shops</Text>
        <View>
          <FlatList 
            data={coffeeShops}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{paddingVertical:10}}
            renderItem={({ item }) => (
              <PromoCard image={item.image}/>
  )}
          />
        </View>
        </ScrollView>
        <HomeScreenBottomTab />
    
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
    paddingVertical:5,
    paddingHorizontal:16,
    borderWidth: 1,
    borderColor: '#674736',
    backgroundColor: '#F1EB9F',
    borderRadius: 20,
    marginRight: 10,
    alignSelf:'flex-start'
  },
  activeCategory: {
    backgroundColor:'#674736',
  },
  activeCategoryText:{
    color:'#fff',
  },
  categoryText: {
  color: '#000',
  fontWeight: 'bold',
  fontSize: 14,
},
  
});


  