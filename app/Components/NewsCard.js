import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import moment from "moment";
import colors from "../config/colors";

export default function NewsCard({ article, image }) {
  const { publishedAt } = article;
  const time = moment(publishedAt || moment.now()).fromNow();

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.primaryText}>{article.title}</Text>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.secondaryText}>{article.author}</Text>
        </View>
        <View>
          <Text style={styles.secondaryText}>{time}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
  },
  details: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  primaryText: {
    fontSize: 15,
    color: "#222",
  },
  secondaryText: {
    fontSize: 12,
    color: colors.grey,
  },
  footer: {
    paddingHorizontal: 15,
    marginVertical: 10,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
