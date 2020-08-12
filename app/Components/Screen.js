import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.offWhite,
  },
});
