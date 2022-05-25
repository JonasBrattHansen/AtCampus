import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {CreateUserContext} from "../../global/CreateUserContext";
import {useContext} from "react";
import CreateAccountTitle from "../../components/CreateAccountTitle";


export default function MakeUserName({ navigation, }) {
    const {
        setFirstname,
        setLastname,
        firstname,
        lastname
    } = useContext(CreateUserContext)

    function onPress(){
        if (firstname !== "" && lastname !== ""){
            navigation.navigate("makeUserInfo")
        }else{
            alert("Firstname and lastname cant be empty")
        }
    }

  return (
          <View style={styles.container}>
              <ScrollView>
              <CreateAccountTitle/>
              <LoginInput title={"First name"} onChangeText={val => setFirstname(val)} keyboardType={"default"}/>
              <LoginInput title={"Last name"} onChangeText={val => setLastname(val)} keyboardType={"default"} />
              <StatusBar style="auto" />
             <LoginButton  navigation={navigation} title={"Next"} onPress={onPress} />
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
});
