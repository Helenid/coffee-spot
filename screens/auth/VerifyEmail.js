import { View, Text,ScrollView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../../components/Background';
import { useState } from 'react';
import OtpInput from '../../components/OtpInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import AppModal from '../../components/AppModal';
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from '@expo/vector-icons/Fontisto';

const VerifyEmail = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  return (
    <Background imageSource={require('../../assets/coffee.png')}>
      <ScrollView contentContainerStyle={{ gap: 30, padding:10 }}>
        <SafeAreaView>
          <Text style={{color:'#fff', fontSize:26, fontWeight:'bold'}}>Verify your Email address</Text>
          <Text style={{color:'#fff', fontSize:18, marginBottom:15}}> Please enter the 6-digit verification code sent to your email address</Text>
        <OtpInput onChange={setOtp} length={6} />
        <View style={{alignSelf:'center'}}>
            <TouchableOpacity onPress={() => setShowSuccess(true)}> 
                <Text style={styles.button}>Verify</Text>
            </TouchableOpacity>
        </View>
          <AppModal
        modalStyles={{
          width:'85%',
          alignSelf:'center',
          borderRadius:20,
          backgroundColor:'#674736',
          gap:20,
          paddingVertical:20,
          paddingTop:20
        }}
        backdropStyle={{alignItems:'center', justifyContent:'center'}}
        visible={showSuccess}
        onClose={() => setShowSuccess(false)}
      >
        <View style={{ gap: 16, marginBottom: 20 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => setShowSuccess(false)}
        >
          <AntDesign name="close" size={20} color='#fff' />
        </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Fontisto name="coffeescript" size={30} color="#fff" style={{marginBottom:10}}/>
          <Text style={{color: '#fff', fontWeight:'bold', fontSize:22, marginBottom:10}}>Account successfully created</Text>
          <Text style={{color:'#fff', fontSize:16, textAlign:'center', marginBottom: 20}}>Congratulations coffee lover, your account has been created successfully.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.goHome}>Order your Favorite Cup </Text>
          </TouchableOpacity>
        </View>
      </AppModal>
        </SafeAreaView>
      </ScrollView>
    </Background>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
    button:{
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    textAlign:'center',
    width:300,
    fontWeight:'bold',
    fontSize:18, 
    marginVertical:50
    },
    goHome:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    fontSize:16,
    fontWeight:'bold',
    marginBottom:10
  }
})