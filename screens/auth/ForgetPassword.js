import { View, Text, Image, StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Background from '../../components/Background'
import AppModal from '../../components/AppModal'
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const ForgetPassword = () => {
    const [resetPassword, setResetPassword] = useState('')
  return (
    <Background imageSource={require('../../assets/coffee.png')}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={{ width: 120, height: 120, alignSelf:'center' }}/>
        <Text style={{color:'#fff', fontSize:16, marginBottom:5}}>Enter your Email Address</Text>
        <TextInput placeholder=" Email" style={styles.input} placeholderTextColor="#aaa"/>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={() => setResetPassword(true)}>
            <Text style={styles.reset}>Reset Password</Text>
        </TouchableOpacity>
        </View>
         <AppModal
        modalStyles={{
          width:'65%',
          alignSelf:'center',
          borderRadius:20,
          backgroundColor:'#674736',
          gap:20,
          paddingVertical:20,
          paddingTop:20
        }}
        backdropStyle={{alignItems:'center', justifyContent:'center'}}
        visible={resetPassword}
        onClose={() => setResetPassword(false)}
      >
        <View style={{ gap: 16, marginBottom: 20 }}>
        <TouchableOpacity
          style={{ alignItems: "flex-end" }}
          onPress={() => setResetPassword(false)}
        >
          <AntDesign name="close" size={20} color='#fff' />
        </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <MaterialIcons name="password" size={30} color="#fff" />
          <Text style={{color: '#fff', fontWeight:'bold', fontSize:22, marginBottom:10}}>Password Reset</Text>
          <Text style={{color:'#fff', fontSize:16, textAlign:'center', marginBottom: 20}}>A verification link has been sent to your email, kindly click on the link to reset password.</Text>
        </View>
      </AppModal>
        </View>
    </Background>
  )
}

export default ForgetPassword;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
},
reset:{
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10, 
    textAlign:'center',
    width:150,

}

})