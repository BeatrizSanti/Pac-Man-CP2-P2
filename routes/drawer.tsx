import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';


import Home from '../components/Home'; 
import Menu from '../components/Menu'; 
import PopAbout from '../components/PopAbout'
import BiaeAna from '../components/BiaeAna'
import Feedback from '../components/Feedback'
import Fantasma from '../components/Fantasmas'


const Stack = createStackNavigator();




export default function App() {

  return (


    <NavigationContainer>

    

      <Stack.Navigator>



        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} 
        />



        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }} 
        />


        <Stack.Screen 
          name="PopAbout" 
          component={PopAbout} 
          options={{ headerShown: false }}
        />


        <Stack.Screen 
          name="BiaeAna" 
          component={BiaeAna} 
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="Fantasma"
          component={Fantasma}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ headerShown: false }}
        />

        

      </Stack.Navigator>

    </NavigationContainer>

  );
}