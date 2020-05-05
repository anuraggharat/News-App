import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Screens/Home'
import Profile from './Screens/Profile'
import Channels from './Screens/Channels'
import Search from './Screens/Search'


import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [country,setCountry] = useState("us")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  async function fetchData(){
    const res =await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=741f9880a09c4895b6a87559756e587c`)
    const response=await res.json()  
    .then(response=>setData(response))
    .then(response=>setLoading(false))
    .catch(err=>console.log(err))

  }
  
useEffect(()=>
  {fetchData()}
    
  , [])
    
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName ='ios-home';
            } else if (route.name === 'Profile') {
              iconName ='ios-man';
            }
            else if (route.name === 'Search') {
              iconName = 'ios-search';
            }
            else if (route.name === 'Channels') {
              iconName = 'ios-megaphone';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'My home' }}/>
        <Tab.Screen name="Search" component={Search} options={{ title: 'My home' }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'My home' }}/>
        <Tab.Screen name="Channels" component={Channels} options={{ title: 'My home' }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
