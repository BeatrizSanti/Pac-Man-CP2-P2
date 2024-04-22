

import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';

export default function LogoPlay ({navigation}) {


    const handlePress = () => {
    navigation.navigate('PopAbout');
  };

  return (

    <View style={style.container}>

      <TouchableOpacity
        style={style.touchable}
        onPress={() => navigation.navigate("PopAbout")}
        
      >
        <Image
          style={style.logo}
          source={require('../assets/logoPlay.png')}
        />
      </TouchableOpacity>

    </View>
  );
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  touchable: {
    borderRadius: 2,
    overflow: 'hidden', 
  },

  logo: {
    height: 160,
    width: 317,
    marginTop:10,
    marginBottom: 50,
  },
});