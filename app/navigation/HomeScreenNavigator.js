import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import NewsDetails from "../Screens/NewsDetails";

const Stack = createStackNavigator();

const HomeScreenNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={NewsDetails} />
  </Stack.Navigator>
);
export default HomeScreenNavigator;
