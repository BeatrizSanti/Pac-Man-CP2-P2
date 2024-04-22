


import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

export default function UltPacButton({ navigation }) {

    const handlePress = () => {
    navigation.navigate('Feedback');
  };


  return (
    <SafeAreaView>

        <View>

          <TouchableOpacity 
            onPress={() => navigation.navigate("Feedback")}
          >

            <Image
              style={style.UltPacImage}
              source={require('../assets/ultimoPacman.png')}
            />
          </TouchableOpacity>

        </View>

    </SafeAreaView>

  );
}

const style = StyleSheet.create({
 


  UltPacImage: {
    marginTop: 200,
    height: 246,
    width: 241,
    marginBottom: 10,
  },
  
});