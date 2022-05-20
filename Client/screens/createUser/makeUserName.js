import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";


export default function MakeUserName({ navigation, }) {

  return (
          <View style={styles.container}>
              <ScrollView>
              <View>
                  <Text style={styles.title}>Create your account</Text>
              </View>
              <LoginInput title={"First name"}  />
              <LoginInput title={"Last name"}  />
              <StatusBar style="auto" />
             <LoginButton  navigation={navigation} title={"Next"} path={"makeUserInfo"} />
              </ScrollView>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
  },
    title: {
      marginTop: 40,
        padding: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
});
