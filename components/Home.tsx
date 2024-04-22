

import React, { useState, useRef, useEffect } from 'react';
import { Text, StyleSheet, View, Platform, StatusBar, SafeAreaView, ScrollView, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useFonts } from 'expo-font';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LogoPlay from '../components/LogoPlay';
import Pop from './Pop'
import PacMan from '../components/PacMan';
import GameOver from '../components/GameOver';





const Stack = createStackNavigator();



export default function Home({ navigation }){
  
  const [loaded] = useFonts({
    Minecraft: require('../assets/Minecraft.ttf'),
  });


  const [scrollY] = useState(new Animated.Value(0));
  




  if (!loaded) {
    return null; 
  }

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });



  return (

    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor="#FFFFFF" />

        <Header navigation={navigation}/>
      

      <ScrollView
        style={style.scrollView}
        contentContainerStyle={style.contentContainer}
      >


        <LogoPlay navigation={navigation} />

        <Pop/>

        
        <PacMan navigation={navigation} />

        <GameOver />

      </ScrollView>

      <Footer />



    </SafeAreaView>

    
  );
}




const style = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,
  },


  scrollView: {
    flex: 1,
  },


  contentContainer: {
    paddingTop: 150, 
    paddingBottom: 50, 
    alignItems: 'center',
  },



});