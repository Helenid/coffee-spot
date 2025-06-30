import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image } from 'react-native';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Background imageSource={require('../../assets/coffee.png')}>
      <View style={styles.container}>
         <Image source={require('../../assets/logo.png')} style={{ width: 120, height: 120, alignSelf:'center' }}/>
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#aaa" />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#aaa" />
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={{textAlign:'right', color:'#fff', fontWeight:'bold', marginBottom:10}}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
  },
});
