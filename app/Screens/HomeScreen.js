import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getHeadLines } from "../api/news";
import Loader from "../Components/Loader";
import NewsCard from "../Components/NewsCard";
import Screen from "../Components/Screen";

export default function HomeScreen() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = () => {
    setLoading(true);
    getHeadLines()
      .then((res) => {
        setNews(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <Screen style={styles.container}>
      <View styles={styles.mainScreen}>
        <FlatList
          data={news}
          showsHorizontalScrollIndicator={false}
          onRefresh={() => getNews()}
          refreshing={loading}
          keyExtractor={(item) => item.url}
          renderItem={({ item }) => (
            <NewsCard article={item} image={item.urlToImage} />
          )}
        ></FlatList>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  mainScreen: {
    padding: 20,
  },
});
