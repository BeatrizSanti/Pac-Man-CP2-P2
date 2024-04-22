import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu'


export default ({ navigation }) => {
 
 
  const handleAboutPress = () => {
    navigation.navigate('BiaeAna');
  };
 
  return (
    
    
    <SafeAreaView style={style.container}>

       <Header navigation={navigation} />

    <ScrollView>
        
          <View >
          <Image 
            style={style.anaImage} 
            source={require('../assets/ana.png')} 
          />
        </View>
    
      <View  >    
          <Image 
            style={style.biaImage} 
            source={require('../assets/Bia.png')} 
          />
        </View>


        <View >
          <Image 
            style={style.mirellyImage} 
            source={require('../assets/mirelly.png')} 
          />
        </View>



      </ScrollView>

     <Footer/>
      
    </SafeAreaView>


  );
};

const style = StyleSheet.create({


   biaImage: {
    left: 30,
    height: 145,
    width: 360,
    alignItems: 'flex-end',
    marginBottom: 20

   
  },
  anaImage: {
    marginTop: 30,
    height: 145,
    width: 360,
    marginBottom: 20
  },

  mirellyImage: {
    marginTop: 30,
    height: 145,
    width: 360,
    marginBottom: 111
  },

   container: {
    flex: 1,
    backgroundColor: '#FFDF00',
    marginTop: 25,
  },




  
});