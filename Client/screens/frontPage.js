import { Button, StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import SvgAtCampus from "../components/SvgAtCampus";

export default function FrontPage({ navigation }) {
  return (
    <View style={styles.container}>
      <SvgAtCampus/>
      <StatusBar style="auto" />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("login");
        }}
      />
      <Button
        title="Create Account"
        onPress={() => {
          navigation.navigate("makeUserName");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
    atCampus: {
        width: 60,
        height: 60,
        marginRight: 10,
    }
});
