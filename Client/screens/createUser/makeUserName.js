import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {CreateUserContext} from "../../global/CreateUserContext";
import {useContext} from "react";


export default function MakeUserName({ navigation, }) {
    const {
        setFirstname,
        setLastname,
    } = useContext(CreateUserContext)

  return (
          <View style={styles.container}>
              <ScrollView>
              <View>
                  <Text style={styles.title}>Create your account</Text>
              </View>
              <LoginInput title={"First name"} onChangeText={val => setFirstname(val)} keyboardType={"default"}/>
              <LoginInput title={"Last name"} onChangeText={val => setLastname(val)} keyboardType={"default"} />
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
