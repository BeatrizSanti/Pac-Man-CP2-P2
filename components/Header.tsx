


import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView, Text, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 

import Menu from './Menu'
 
export default function Header ({ navigation }) {


  const openGitHub = () => {
    Linking.openURL('https://github.com/');
  };


  const openExpo = () => {
    Linking.openURL('https://expo.dev/');
  };


  const openYouTube = () => {
    Linking.openURL('https://www.youtube.com/');
  };
 

 
  return (
 
    <SafeAreaView>
 
      <View style={style.header}>
 
        <View style={style.imagemContainer}>
 
          <Image
            style={style.imagemHeaderLogo}
            source={require('../assets/lofoheader.png')}
          />
 
        </View>
 
 
 
        <View style={style.imagemContainer2}>
 
          <TouchableOpacity
            onPress={openGitHub}
          >
 
            <Image
              style={style.imagemHeaderGithub}
              source={require('../assets/GITHUB.png')}
            />
 
          </TouchableOpacity>
 
        </View>
 
 
 
        <View style={style.imagemContainer2}>
 
          <TouchableOpacity
            onPress={openExpo}
          >
 
            <Image
              style={style.imagemHeaderExpo}
              source={require('../assets/expo.png')}
            />
 
          </TouchableOpacity>
 
        </View>
 
 
 
        <View style={style.imagemContainer2} >
 
          <TouchableOpacity
            onPress={openYouTube}
          >
 
            <Image
              style={style.imagemHeaderYoutube}
              source={require('../assets/YOUTUBE.png')}
            />
 
          </TouchableOpacity>
 
        </View>
 
      </View>
 
 
 
      <View style={style.headerBaixo}>
 
        <TouchableOpacity
          onPress={() => navigation.navigate("Menu")}
        >
 
        <Ionicons name="menu" marginLeft={330} marginTop={5} size={40} color="white" />
 
 
        </TouchableOpacity>
 
      </View>
 
    </SafeAreaView>
  )
}
 
const style = StyleSheet.create({
 
 
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    overflow: 'visible',
  },
 
 
  headerBaixo: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#000000',
  },
 
 
  imagemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
 
 
  imagemContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 1,
    marginTop: 5,
  },
 
 
  imagemHeaderLogo: {
    width: 155,
    height: 54,
    left: 30,
    marginLeft: 20,
  },
 
 
  imagemHeaderGithub: {
    height: 45,
    width: 29,
    marginLeft: 170,
  },
 
 
  imagemHeaderExpo: {
    height: 30,
    width: 25,
    marginLeft: 90,
  },
 
 
  imagemHeaderYoutube: {
    height: 45,
    width: 45,
    marginLeft: 20,
    marginBottom: 2,
 
  },
 
 
 
});
 
 
 
 