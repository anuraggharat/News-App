import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/SearchNewsScreen";
import NewsDetails from "../Screens/NewsDetails";
import { SearchBar } from "react-native-elements";
import SearchNewsScreen from "../Screens/SearchNewsScreen";

const Stack = createStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Search" component={SearchNewsScreen} />
    <Stack.Screen name="Details" component={NewsDetails} />
  </Stack.Navigator>
);
export default SearchNavigator;
