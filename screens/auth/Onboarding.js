

// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native';

// const Onboarding = () => {
//     const navigation = useNavigation();
//   return (
//     <ImageBackground
//       source={require('../../assets/coffee.png')}
//       resizeMode='cover'
//       style={styles.background}
//     >
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={{ flex: 1, justifyContent: 'space-between',alignItems:'center', paddingVertical: 100 }}>
//           <View style={styles.content}>
//             <Image source={require('../../assets/logo.png')} style={{ width: 120, height: 120 }} />
//             <Text style={styles.text}>
//               Find the best coffee just for you.
//             </Text>
//             </View>
//             <TouchableOpacity onPress ={() => navigation.navigate('Login')} style={styles.button}>
//               <Text style={styles.buttonText}>Get Started</Text>
//             </TouchableOpacity>
          
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// export default Onboarding;

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//   },
//   content: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: 'white', // important: ensure contrast with background
//     fontSize: 30,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//     marginHorizontal: 20,
//   },
//   button: {
//     backgroundColor: '#fff',
//     width:250,
//     paddingVertical: 12,
//     paddingHorizontal: 40,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 26,
//     textAlign:'center'
//   },
// });

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import Background from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <Background imageSource={require('../../assets/coffee.png')}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              source={require('../../assets/logo.png')}
              style={{ width: 120, height: 120 }}
            />
            <Text style={styles.text}>
              Find the best coffee just for you.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
