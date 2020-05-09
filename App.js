import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from './Screens/Profile'
import Channels from './Screens/Channels'
import Search from './Screens/Search'



import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './Screens/Home';

const Tab = createMaterialBottomTabNavigator();




export default function App() {

  
    
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
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }}  />
        <Tab.Screen name="Search" component={Search} options={{ title: 'Search' }}/>
        <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile' }}/>
        <Tab.Screen name="Channels" component={Channels} options={{ title: 'Channels' }}/>

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
