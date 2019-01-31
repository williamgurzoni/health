import React from 'react';
import { View, Text } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

const Header = () => {
  return(
    <View style={ styles.headerContent }>
      <IconEntypo name='menu' size={30} color="#FFFFFF" />
      <Text style={ styles.title }>MEU PERFIL</Text>
      <IconMC name='weather-sunny' size={30} color="#FFFFFF" />
    </View>
  );
};

export default Header;
