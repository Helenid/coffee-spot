import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const ReviewOrder = ({ route, navigation}) => {
    const { item } = route.params || {};
    const [quantity, setQuantity] = useState(item.quantity || 1);
    const priceValue = parseFloat(item.price.replace('$', '')); // adjusted price from detail screen
   const totalPrice = (priceValue * quantity).toFixed(2);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            {/* Header */}
            <View style={{flexDirection: 'row', alignItems:'center', marginBottom: '30', gap:80}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:24, }}>Review Order</Text>
            </View>
              {/* Coffee Card */}
            <View>
                <View style={styles.cardContainer}>
                    <Image source={item.image} style={styles.image}/>
                    <View style={{padding:10}}>
                        <Text style={{fontWeight:'bold', fontSize:18,}}>{item.category}</Text>
                        <Text>{item.label}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:10}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name="star" size={12} color="#674736" />
                                <Text>{item.rate}</Text>
                            </View>
                            <Text style={{fontWeight:'bold'}}>{item.price}</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', gap:60, marginTop: 10}}>
                            <Text style={{fontWeight:'bold'}}>Size: {item.selectedSize || 'N/A'}</Text>
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

                        </View>
                    </View>
                </View>
                  {/* Total Price */}
                <View style={{marginTop:30, gap:10}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>Total:</Text>
                        <Text style={{fontWeight:'bold', fontSize:16}}>${totalPrice}</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>Delivery Charges</Text>
                        <Text style={{fontWeight:'bold', fontSize:16}}>$0.00</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>Address</Text>
                        <Text style={{fontWeight:'bold', fontSize:16}}>2345C, New York. USA</Text>
                    </View>

                </View>
            </View>
        </View>
         <View style={{backgroundColor: '#beb6c0',  padding:16}}>
                    <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize:16}}>Total:</Text>
                            <Text style={{fontWeight: 'bold', fontSize:16}}>{totalPrice}</Text>
                        </View>
                        <TouchableOpacity style={styles.orderButton}>
                            <Text style={styles.orderButtonText}>Place Order</Text>
                        </TouchableOpacity>

                    </View>
                </View>

    </SafeAreaView>
  )
}

export default ReviewOrder

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 15,
    paddingBottom: 100,
  },
    cardContainer:{
        backgroundColor:'#beb6c0',
        flexDirection: 'row',        
        width:'100%',
        height: 120,
        overflow:'hidden',
        marginVertical:10,
        elevation: 3,
        shadowColor:'#333',
        borderRadius:15
    },
    image:{
        width: 150,
        height:150
    },
    counterContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:5
    },

    orderButton: {
    backgroundColor: "#674736",
    padding: 15,
    borderRadius: 10,
    width: '60%'
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
})
