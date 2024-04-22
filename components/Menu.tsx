


import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';




export default ({ navigation }) => (


  <SafeAreaView style={style.container}>



    <View style={style.layout}>


      <TouchableOpacity 
        style={style.cancelaContainer}
        onPress={() => navigation.goBack()} 
      >

        <MaterialIcons name="cancel" size={40} color="black" />

      </TouchableOpacity>



      <TouchableOpacity 
        style={style.menuItem} 
        onPress={() => navigation.navigate('Home')}
      >

        <Image 
          style={style.menuIcon}
          source={require('../assets/cereja.png')}
        />
        <Text style={style.txtTexto}>HOME</Text>

      </TouchableOpacity>



      <TouchableOpacity 
        style={style.menuItem} 
        onPress={() => navigation.navigate('PopAbout')}
      >

        <Image 
          style={style.menuIcon}
          source={require('../assets/fantasmarosa.png')}
        />
        <Text style={style.txtTexto}>ABOUT</Text>

      </TouchableOpacity>



      <TouchableOpacity 
        style={style.menuItem} 
        onPress={() =>navigation.navigate('BiaeAna')}
      >

        <Image 
          style={style.menuIcon}
          source={require('../assets/fantasmaazulescuro.png')}
        />
        <Text style={style.txtTexto}>CHARACTER</Text>

      </TouchableOpacity>

     <TouchableOpacity 
        style={style.menuItem} 
        onPress={() => navigation.navigate('Fantasma')}
      >

        <Image 
          style={style.menuIcon}
          source={require('../assets/fantasmalaranja.png')}
        />
        <Text style={style.txtTexto}>GHOST</Text>

      </TouchableOpacity>

      <TouchableOpacity 
        style={style.menuItem} 
        onPress={() => navigation.navigate('Feedback')}
      >

        <Image 
          style={style.menuIcon}
          source={require('../assets/laranja.png')}
        />
        <Text style={style.txtTexto}>FEEDBACK</Text>

      </TouchableOpacity>


    </View>

  </SafeAreaView>

);



const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },

  layout: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },


  cancelaContainer: {
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 40,
  },


  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },


  txtTexto: {
    color: '#000000',
    fontFamily: 'Minecraft',
    fontSize: 25,
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    left: 30,
    top: 30,
  },


  menuIcon: {
    width: 30,
    height: 30,
    marginRight: 10, 
    left: 30,
    top: 30,
    marginTop: 10,
  }


});