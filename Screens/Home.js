import React,{useState,useEffect} from 'react'
import { View ,Text,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from './News'
import Details from './Details'


export default function Home({navigation}) {

const Stack = createStackNavigator();


  return (
      
        
    <Stack.Navigator>
      <Stack.Screen name="News" component={News}/>
      <Stack.Screen name="Details" component={Details} />
      
      
    </Stack.Navigator>)
    }    



 
