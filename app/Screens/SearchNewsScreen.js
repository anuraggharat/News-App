import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { getSearchNews } from "../api/news";
import Loader from "../Components/Loader";

import NewsCard from "../Components/NewsCard";
import Screen from "../Components/Screen";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

export default function SearchNewsScreen() {
  const [search, setSearch] = useState("bitcoin");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTheNews = () => {
    getSearchNews(search)
      .then((res) => setNews(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  console.log(search);
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
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableWithoutFeedback onPress={() => fetchTheNews(search)}>
            <View style={styles.icon}>
              <AntDesign name="search1" size={20} color={colors.primary} />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.feed}>
          <FlatList
            data={news}
            showsHorizontalScrollIndicator={false}
            onRefresh={() => fetchTheNews()}
            refreshing={loading}
            keyExtractor={(item) => item.url}
            renderItem={({ item }) => (
              <NewsCard
                article={item}
                image={item.urlToImage}
                onPress={() => navigation.navigate("Details", item)}
              />
            )}
          ></FlatList>
        </View>
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
    marginTop: 20,
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
