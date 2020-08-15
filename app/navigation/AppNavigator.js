import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import AboutScreen from "../Screens/AboutScreen";
import HomeScreenNavigator from "./HomeScreenNavigator";
import SearchNavigator from "./SearchNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreenNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="search1" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="About"
      component={AboutScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="information-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
