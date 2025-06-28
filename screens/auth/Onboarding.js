// screens/auth/Onboarding.js
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../../components/background';

const Onboarding = () => {
  return (
    <Background>
      <Text style={styles.text}>Find the best coffee just for you.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </Background>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
