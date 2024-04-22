


import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text } from 'react-native';

export default () => (

  <SafeAreaView >

    <View style={style.footer}>
      <View style={style.imagnesContainer}>

      <View style={style.fantasmasContainer}>
        <Image 
          style={style.logoFooter}
          source={require('../assets/fantasmaazul.png')}
        />

        <Image 
          style={style.logoFooter}
          source={require('../assets/fantasmavermelho.png')}
        />

      </View>

      <Text style={style.txtText}> 
        PAC-MAN™& ©Bandai Namco Entertainment Inc.
      </Text>
      
      <View style={style.fantasmasContainer}>
        <Image 
          style={style.logoFooter}
          source={require('../assets/fantasmalaranja.png')}
        />


        <Image 
          style={style.logoFooter}
          source={require('../assets/fantasmarosinha.png')}
        />

      </View>

      

      </View> 
    </View>  

  </SafeAreaView>
);

const style = StyleSheet.create({


  footer: {
    backgroundColor: '#FFFFFF',
    height: 49,
    width: 415,
    justifyContent: 'space-between',
    alignItems: 'center',

  },


  imagnesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fantasmasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },

  logoFooter: {
    width: 18,
    height: 18,
    marginHorizontal: 5,
  },


  txtText: {
    color: '#000000',
    fontFamily: 'Minecraft',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 20,
  },


});