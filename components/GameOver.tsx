


import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, SafeAreaView, TouchableOpacity, Modal, Text, BackHandler } from 'react-native';



export default function GameOverPage() {

  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {


    const backAction = () => {

      if (modalVisible) {
        setModalVisible(false);
        return true; 

      }

      return false; 
    };

    const backHandler = 
      BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();

  }, [modalVisible]);



  const handleImagePress = () => {
    setModalVisible(true);
  };


  const handleClosePress = () => {
    setModalVisible(false);
    BackHandler.exitApp(); 
  };



  return (


    <SafeAreaView style={style.container}>


      <TouchableOpacity 
        onPress={handleImagePress}
      >

        <Image
          style={style.GameOverImage}
          source={require('../assets/gameover.png')}
        />

      </TouchableOpacity>



      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >


        <View style={style.caixaContainer}>


          <View style={style.caixaContent}>


            <Text style={style.caixaTexto}>Deseja sair?</Text>

            <View style={style.caixaBotaoContainer}>

            <TouchableOpacity 
              onPress={handleClosePress} 
              style={style.botaoCaixa}
            >
              <Text style={style.botaoTexto}>Sim</Text>

            </TouchableOpacity>


            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              style={style.botaoCaixa}
            >
              <Text style={style.botaoTexto}>Cancelar</Text>

            </TouchableOpacity>


            </View>


          </View>


        </View>


      </Modal>


    </SafeAreaView>


  );
}




const style = StyleSheet.create({


  GameOverImage: {
    marginTop: 200,
    height: 320,
    width: 320,
    marginBottom: 150,
  },


  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },



  caixaContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },


  caixaContent: {
    backgroundColor: '#ffffff',
    padding: 50,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },


  caixaTexto: {
    fontSize: 24,
    marginBottom: 80,
    marginTop: 30,
    fontFamily: 'Minecraft',
  },

  caixaBotaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    
  },


  botaoCaixa: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 3,
    borderColor: '#001E97',
    marginBottom: 5,
    flex: 1, 
    marginHorizontal: 10,
    
  },


  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Minecraft',
  },


  
});