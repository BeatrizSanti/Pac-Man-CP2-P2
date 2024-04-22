import React from 'react';
import {StyleSheet, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import Footer from './Footer';


 
export default ({ navigation }) => {
 
 
  const handleAboutPress = () => {
    navigation.navigate('Fantasma');
  };
 
  return (
    
    <SafeAreaView style={style.container}>
    
      <Header navigation={navigation} />

    <ScrollView>

      <View  style={style.contentContainer}>
    

      
      
  
        <View style={style.popImageContainer1}>
          
  
          <View>
            <Image
              style={style.popGhost}
              source={require('../assets/fantasmaPop1.png')}
            />
          </View>
          
           <View>
            <Image
              style={style.popGhost2}
              source={require('../assets/fantasmaPop2.png')}
            />
          </View>

           <View>
            <Image
              style={style.popGhost3}
              source={require('../assets/fantasmaPop3.png')}
            />
            
          </View>

           <View>
            <Image
              style={style.popGhost4}
              source={require('../assets/fantasmaPop4.png')}
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

 
  popImageContainer1: {
    marginLeft: 10,
    marginRight: 20,
    alignItems: 'center',
 
  },
 
 
  popGhost: {
    marginTop: 40,
    height: 350,
    width: 350,
  },

  popGhost2: {
    marginTop: 40,
    height: 350,
    width: 350,
  },

  popGhost3: {
    marginTop: 40,
    height: 350,
    width: 350,
  },


  popGhost4: {
    marginTop: 40,
    height: 315,
    width: 317,
  },

 

 
 
});
