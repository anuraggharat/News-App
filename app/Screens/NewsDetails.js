import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Linking,
  TouchableHighlight,
  Button,
} from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import moment from "moment";

import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

export default function NewsDetails({ navigation, route }) {
  console.log(route);
  const {
    author,
    description,
    publishedAt,
    title,
    url,
    urlToImage,
    source,
  } = route.params;
  const time = moment(publishedAt || moment.now()).fromNow();

  return (
    <ScrollView>
      <View>
        <ImageBackground
          blurRadius={0.5}
          source={{
            uri: urlToImage,
          }}
          style={styles.image}
        >
          <View style={styles.buttonHolder}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <EvilIcons name="arrow-left" size={40} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
              <Feather name="more-vertical" size={40} color={colors.white} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.details}>
          <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.primaryText}>{author}</Text>
          </View>
          <View>
            <Text style={styles.secondaryText}>{time}</Text>
          </View>

          <View style={styles.container}>
            <Text style={styles.text}>{description}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.primaryText}>Source:</Text>
            <Text style={styles.secondaryText}>{source.name}</Text>
          </View>
          <View style={styles.footerButton}>
            <Button
              title="Read More"
              style={styles.primaryButton}
              color={colors.primary}
              accessibilityLabel="Learn more about this purple button"
              onPress={() => Linking.openURL(url)}
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  buttonHolder: {
    display: "flex",
    width: "100%",
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  primaryText: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    color: "#2d3436",
  },

  secondaryText: {
    fontSize: 15,
    color: colors.grey,
  },
  details: {
    padding: 15,
    backgroundColor: colors.white,
    borderRadius: 25,
    width: "100%",
    marginTop: "-5%",
    minHeight: "100%",
  },
  footerButton: {
    marginVertical: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    width: "50%",
    margin: "auto",
    alignSelf: "center",
  },
});
