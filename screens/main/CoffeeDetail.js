import { View, Text, StyleSheet, Image,TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

const sizes = ['S','M','L'];
const sizePriceMultiplier = {
  S: 1,
  M: 1.2,
  L: 1.5
};


const CoffeeDetail = ({ route, navigation}) => {
    const { item } = route.params;
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const priceValue = parseFloat(item.price.replace('$', ''));
    const adjustedPrice = selectedSize ? (priceValue * sizePriceMultiplier[selectedSize]) : priceValue;
    const totalPrice = (adjustedPrice * quantity).toFixed(2);

  return (
    <View style={styles.container}>
        <Image source={item.image} style={styles.image}/>
        <ScrollView 
        style={{paddingHorizontal:20, marginTop:20,}}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold', fontSize: 22}}>{item.category}</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Ionicons name="star" size={12} color="#674736" />
                    <Text style={{fontWeight:'bold'}}>{item.rate}</Text>
                </View>
            </View>
            <View style={{marginTop:15, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontWeight:'bold', fontSize:16}}>{item.label}</Text>
                <Text style={{fontSize:16, fontWeight: 'bold'}}>${adjustedPrice.toFixed(2)}</Text>
                </View>
                {
                    quantity === 0 ? (
                    <View style={{backgroundColor:"#674736", marginTop: 15,
                        alignSelf:'flex-start', padding:2, borderRadius:8 }}>
                        <TouchableOpacity onPress={() => setQuantity(1)}>
                        <AntDesign name="plus" size={20} color="#fff"/>
                        </TouchableOpacity>           
                    </View>
                    ) : (
                        <View style={styles.counterContainer}>
                            <TouchableOpacity onPress ={() => setQuantity(prev => Math.max(prev - 1, 0))}
                                style={{
                                    backgroundColor: "#674736",
                                    padding: 2,
                                    borderRadius:8,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}
                                >
                                    <AntDesign name='minus' size={20} color='#fff'/>
                            </TouchableOpacity>
                            
                            <Text style={{fontWeight:'bold', fontSize:14}}>{quantity}</Text>
                            <TouchableOpacity onPress={() => setQuantity(prev => prev + 1)}
                                style={{
                                    backgroundColor: "#674736",
                                    padding: 2,
                                    borderRadius:8,
                                    alignItems:'center',
                                    justifyContent:'center'
                                }}>
                                <AntDesign name='plus' size={20} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    )
                }
                 <Text style={{fontWeight: 'bold', marginTop: 15, fontSize:16}}>Size</Text>
                 <View style= {styles.sizeContainer}>
                    {sizes.map((size) => (
                        <TouchableOpacity
                            onPress={() => setSelectedSize(size)}
                            key={size}
                            style={[
                                styles.sizeButton,
                                selectedSize === size && styles.activeSizeButton
                            ]}>
                                <Text style={[
                                    styles.sizeText,
                                    selectedSize === size && styles.activeSizeText
                                ]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                    ))}
                 </View>
                    <Text style={{fontWeight:'bold', fontSize:18}}>Description</Text>
                    <Text style={{ fontSize: 14, color: '#444', lineHeight: 20, textAlign:'justify' }}>
                        {showFullDescription || item.description.length <= 100 ? item.description : `${item.description.slice(0, 100)}...`}
                  </Text>
                  <TouchableOpacity onPress={() => setShowFullDescription(prev => !prev)}>
                    <Text style={{ color: '#674736', fontWeight: 'bold', marginTop: 5 }}>{showFullDescription ? 'Show less' : 'Show more'}</Text>
                  </TouchableOpacity>
                    <View
                        style={{
                            bottom:0,
                            left:0,
                            right:0,
                            alignSelf:'center',
                            position:'absolute'
                        }}>
                    </View>
        </ScrollView>  
        <View style={styles.bottomArea}>
        <TouchableOpacity style={styles.orderButton} 
        disabled ={!selectedSize}
        onPress={() => {
            
            navigation.navigate('ReviewOrder', 
            {item: 
            {...item, 
            selectedSize, 
            quantity, 
            price:`$${adjustedPrice.toFixed(2)}`
            }})}}>
          <Text style={styles.orderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
</View>
  )
}

export default CoffeeDetail
const styles = StyleSheet.create({
    container:{
        flex:1,
         backgroundColor:'#F0F0F0'
    },
    image:{
        width:'100%',
        resizeMode:'cover',
        height:350
    },
    sizeContainer:{
        flexDirection: 'row',
        marginVertical:20,
        gap:20
    },
    sizeButton:{
        borderWidth:1,
        borderColor:'#808080',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius: 5
    },
    activeSizeButton:{
        backgroundColor:"#674736"
    },
    activeSizeText:{
        color:'#fff'
    },
    counterContainer:{
        marginTop:20,
        flexDirection:'row',
        alignSelf:'flex-start',
        justifyContent: 'center',
        alignItems:'center',
        gap:5
    },
    bottomArea: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center'
  },
  orderButton: {
    backgroundColor: "#674736",
    padding: 15,
    borderRadius: 10,
    width: '100%'
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
    
})