import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';

 
export default ({ navigation }) => {
 
 
  const handleAboutPress = () => {
    navigation.navigate('PopAbout');
  };
 
  return (
    
    <SafeAreaView style={style.container}>
    
      <Header navigation={navigation} />

    <ScrollView>

      <View  style={style.contentContainer}>
    

      
        <View style={style.imageContainer}>
        
        
  
          <Image
            style={style.aboutImage}
            source={require('../assets/about.png')}
          />
        
        </View>
  
        <View style={style.popImageContainer1}>
  
          <View>
            <Image
              style={style.popExImage1}
              source={require('../assets/popAbout.png')}
            />
          </View>
  
  
  
          <View style={style.popImageContainer2}>
            <Image
              style={style.popExImage2}
              source={require('../assets/popAbout2.png')}
            />
          </View>
  
  
  
          <View style={style.pacContainer}>
            <Image
              style={style.pacExImage}
              source={require('../assets/pacmanexplica.png')}
            />
          </View>
  
  
 
        </View>
     

      </View>
      
    </ScrollView>


    <Footer/> 


    </SafeAreaView>
 
  );
};
 
const style = StyleSheet.create({
 
 
  pacContainer: {
    position: 'absolute',
    right: -50,
    top: 55,  
 
  },




  container: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,
  },


  contentContainer: {
    paddingTop: 150, 
    paddingBottom: 45, 
    alignItems: 'center',
  },



 
 
  imageContainer: {
    marginLeft: 0,
  },
 
 
  popImageContainer1: {
    marginLeft: 10,
    marginRight: 20,
 
  },
 
 
  popImageContainer2: {
    marginLeft: 20,
    marginRight: 20,
 
  },
 
 
  aboutImage: {
    marginTop: 1,
    height: 50,
    width: 250,
  },
 
 
  popExImage1: {
    marginTop: 40,
    height: 205,
    width: 260,
  },
 
 
  popExImage2: {
    marginTop: 10,
    height: 100,
    width: 310,
    marginBottom:66
  },
 
 
  pacExImage: {
    height: 161,
    width: 172,
  },
});