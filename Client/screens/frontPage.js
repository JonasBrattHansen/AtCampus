import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function FrontPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is frontpage!</Text>
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
});
