import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {useContext, useState} from "react";
import {CreateUserContext} from "../../global/CreateUserContext";

export default function MakeUserInfo({ navigation, getEmail, getPhoneNr }) {
    const {
        setEmail,
        setPhoneNr,
    } = useContext(CreateUserContext)

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
            <View>
                <Text style={styles.title}>Create your account</Text>
            </View>
            <LoginInput setEmail={() => getEmail} title={"Email"} onChangeText={(val => setEmail(val))} keyboardType={"default"} />
            <LoginInput setPhoneNr={() => getPhoneNr} title={"Phone number"} onChangeText={(val) => setPhoneNr(val)} keyboardType={"numeric"}/>
           <LoginButton navigation={navigation} title={"Next"} path={"makeUserSchool"}/>
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
