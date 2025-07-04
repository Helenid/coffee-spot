import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const modeOfPayment = [
  { id: 'card', label: 'Pay with debit/credit card' },
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'cash', label: 'Pay on delivery' },
];
const PaymentMethod = ({route, navigation}) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const { totalPrice } = route.params || {};

  return (
     <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Header */}
                <View style={{flexDirection: 'row', alignItems:'center', marginBottom: '30', gap:60}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{fontWeight:'bold', fontSize:24, }}>Payment Method</Text>
                </View>
                {modeOfPayment.map((item) => {
                    const isSelected = selectedPaymentMethod === item.id;
                    return(
                        <TouchableOpacity
                         key={item.id}
                        onPress={() => setSelectedPaymentMethod(item.id)}
                        style={styles.option}
                        >
                            <Entypo 
                            name={isSelected ? "controller-record" : "circle"} 
                            size={24}
                            color="#674736"
                            style={{marginRight:10}}
                            />
                            <Text style={{fontWeight:'bold', fontSize:18, marginVertical:'10'}}>{item.label}</Text>
                        </TouchableOpacity>

                    )})}
                    {selectedPaymentMethod === 'card' && (
                        <View style={styles.cardDetails}>
                            <Text style={{fontSize:16, color:'#333'}}>Card Number</Text>
                                <TextInput 
                                placeholder='XXXX XXXX XXXX XXXX'
                                placeholderTextColor='#aaa'
                                keyboardType='numeric'
                                style={styles.placeholder}
                                />
                                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10, paddingRight:30}}>
                                    <View>
                                        <Text style={{fontSize:16, color:'#333'}}>Exp</Text>
                                        <TextInput 
                                        placeholder='MM/YY'
                                        placeholderTextColor='#aaa'
                                        style={styles.placeholder}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{fontSize:16, color:'#333'}}>CVV</Text>
                                        <TextInput 
                                        keyboardType='numeric'
                                        placeholder='123'
                                        placeholderTextColor='#aaa'
                                        style={styles.placeholder}
                                        />
                                    </View>

                                </View>
                                <View style={{marginTop:10}}>
                                    <Text style={{fontSize:16, color:'#333'}}>Name on the Card</Text>
                                     <TextInput 
                                placeholder='James Mary'
                                placeholderTextColor='#aaa'
                                style={styles.placeholder}
                                />

                                </View>
                        </View>
                    )}
                    
                    {selectedPaymentMethod === 'bank' && (
                        <View style={{marginTop:20, gap:8, paddingHorizontal:10}}>
                            <Text style={{fontWeight:'bold', fontSize:16}}>Our Account Details</Text>
                            <View style={{flexDirection:'row', gap:20}}>
                                <Text style={{fontWeight:'bold'}}>Bank Name:</Text>
                                <Text>Providus Bank</Text>
                            </View>
                            <View style={{flexDirection:'row', gap:20}}>
                                <Text style={{fontWeight:'bold'}}>Account Number:</Text>
                                <Text>1234567890</Text>
                            </View>
                            <View style={{flexDirection:'row', gap:20}}>
                                <Text style={{fontWeight:'bold'}}>Account Name:</Text>
                                <Text>The Spring Cafe</Text>
                            </View>
                            <Text>A confirmatory mail will be sent to your email to confirm payment.</Text>
                        </View>
                    )

                    }

                
            </View>
             <View style={{backgroundColor: '#beb6c0',  padding:16}}>
                <View style={{justifyContent:'space-between', flexDirection:'row', alignItems:'center'}}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize:16}}>Total:</Text>
                        <Text style={{fontWeight: 'bold', fontSize:16}}>${totalPrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.orderButton}
                        onPress={() => navigation.navigate('BuyNow')}
                    >
                        <Text style={styles.orderButtonText}>Buy Now</Text>
                    </TouchableOpacity>

                </View>
            </View>

            </SafeAreaView>    
  )
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 15,
    paddingBottom: 100,
  },
  option:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap: 10
  },
  cardDetails:{
    marginTop:20,
    padding: 15
  },
  placeholder:{
    borderBottomWidth:1,
    borderBottomColor:'#aaa'
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