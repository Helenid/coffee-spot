import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreenBottomTab = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
       right: 0,
       height: 70,
        backgroundColor: '#F1EB9F',
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <AntDesign name="home" size={24} color="#674736" />
      </TouchableOpacity>
      <TouchableOpacity 
      // onPress={() => navigation.navigate('Favorite')}
      >
        <AntDesign name="hearto" size={24} color="#674736" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="bag-outline" size={24} color="#674736" />
      </TouchableOpacity>
      <TouchableOpacity 
      // onPress={() => navigation.navigate('ProfileIndex')}
      >
        <Ionicons name="person-outline" size={24} color="#674736" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenBottomTab;
