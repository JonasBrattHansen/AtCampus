import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";


export default function MakeUserName({ navigation }) {
  return (
          <View style={styles.container}>
              <ScrollView>
              <View>
                  <Text style={styles.text}>Create your account</Text>
              </View>
              <LoginInput title={"First name"}/>
              <LoginInput title={"Last name"}/>
              <StatusBar style="auto" />
              <View>
                  <TouchableOpacity
                      style={styles.button}
                      title="Next"
                      onPress={() => {
                          navigation.navigate("makeUserInfo");
                      }}
                  >
                      <Text style={styles.next}>Next</Text>
                  </TouchableOpacity>
              </View>
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
    text: {
      paddingTop: 90,
        paddingLeft: 20,
        padding: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    button: {
      alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
        marginTop: 150,
    },
    next: {
      color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    }
});
