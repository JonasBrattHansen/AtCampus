import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function MakeUserComplete({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is Login!</Text>
      <StatusBar style="auto" />
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
