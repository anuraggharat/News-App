import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { getHeadLines, getSearchNews } from "../api/news";
import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

export default function SearchNewsScreen() {
  const [search, setSearch] = useState("bitcoin");

  const fetchTheNews = () => {
    getSearchNews().then((res) => console.log(res));
  };

  useEffect(() => {
    fetchTheNews();
  }, []);

  return (
    <Screen style={styles.container}>
      <View styles={styles.mainScreen}>
        <View style={styles.searchbar}>
          <TextInput
            style={styles.textInput}
            keyboardType="web-search"
            autoCapitalize="none"
            placeholder="for ex: bitcoin"
          />
          <View style={styles.icon}>
            <AntDesign name="search1" size={20} color={colors.primary} />
          </View>
        </View>
        <View style={styles.feed}></View>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    alignContent: "center",
  },
  feed: {
    margin: 50,
  },
  icon: {
    justifyContent: "center",
  },
  mainScreen: {
    padding: 20,
  },
  textInput: {
    flex: 1,
  },
  searchbar: {
    marginTop: 20,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: colors.white,
    elevation: 5,
    height: 40,
  },
});
