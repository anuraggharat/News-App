import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from './Screens/Home'
import Profile from './Screens/Profile'
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
              iconName = focused
                ? 'ios-home'
                : 'md-home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-man' : 'ios-list';
            }
            else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-reorder';
            }

            // You can return any component that you like here!
             
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
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
