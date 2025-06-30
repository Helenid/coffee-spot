import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Image } from 'react-native';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';


const SignUp = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure, setSecure] = useState(true);

  return (
    <Background imageSource={require('../../assets/coffee.png')}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={{ width: 120, height: 120, alignSelf:'center' }}/>
        <TextInput 
          placeholder="Name" 
          style={styles.input} 
          placeholderTextColor="#aaa" 
        />
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          placeholderTextColor="#aaa" 
        />
          <TextInput 
            placeholder="Password" 
            secureTextEntry={secure} 
            style={styles.input} 
            placeholderTextColor="#aaa" 
            value={password}
            onChangeText={setPassword}
          />
          {/* <TouchableOpacity >
            <Ionicons name={secure ? 'eye-off': 'eye'} size={24} color='#999'/>
          </TouchableOpacity> */}
          <TextInput 
            placeholder="Confirm Password" 
            secureTextEntry={secure} 
            style={styles.input} 
            placeholderTextColor="#aaa" 
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />   
        <TouchableOpacity 
        style={styles.button} 
        // onPress={() => setShowSuccess(true)}
        onPress={() => navigation.navigate('VerifyEmail')}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
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
