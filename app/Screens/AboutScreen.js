import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Screen from "../Components/Screen";
import defaultStyles from "../config/defaultStyles";

export default function AboutScreen() {
  return (
    <Screen style={styles.container}>
      <View styles={styles.mainScreen}>
        <View style={styles.profile}>
          <Text style={defaultStyles.primaryText}>
            News App Designed and Developed by
          </Text>
          <View style={styles.profileDetails}>
            <Image
              source={require("../assets/anurag.jpg")}
              style={styles.profilePicture}
            ></Image>
            <Text style={defaultStyles.heading}>Anurag Gharat</Text>
          </View>
          <View style={styles.contact}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/anuraggharat")}
            >
              <AntDesign
                name="github"
                size={40}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/in/anurag-gharat-25541b18b/"
                )
              }
            >
              <AntDesign
                name="linkedin-square"
                size={40}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={defaultStyles.primaryText}>
            This News App is designed and developed by Anurag. The App is
            writted on React Native and uses free news API services provided by
            newsapi.org
          </Text>
        </View>
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
  profile: {
    marginTop: 75,
    display: "flex",
    width: "100%",
    alignItems: "center",
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  contact: {
    marginVertical: 20,
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
});
