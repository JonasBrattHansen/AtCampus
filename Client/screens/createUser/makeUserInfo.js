import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {useContext, useState} from "react";
import {CreateUserContext} from "../../global/CreateUserContext";
import CreateAccountTitle from "../../components/CreateAccountTitle";

export default function MakeUserInfo({ navigation, getEmail, getPhoneNr }) {
    const {
        setEmail,
        setPhoneNr,
        email,
        phoneNr
    } = useContext(CreateUserContext)

    function onPress(){
        if (email !== "" && phoneNr !== ""){
            alert("Email and Phone number cant be empty")
        }else{
            navigation.navigate("makeUserSchool")
        }
    }

    return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
          <CreateAccountTitle/>
            <LoginInput setEmail={() => getEmail} title={"Email"} onChangeText={(val => setEmail(val))} keyboardType={"default"} />
            <LoginInput setPhoneNr={() => getPhoneNr} title={"Phone number"} onChangeText={(val) => setPhoneNr(val)} keyboardType={"numeric"}/>
           <LoginButton navigation={navigation} title={"Next"} onPress={onPress}/>
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
