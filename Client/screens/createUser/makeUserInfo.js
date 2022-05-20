import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginInput from "../../components/LoginInput";
import LoginButton from "../../components/LoginButton";
import {useState} from "react";

export default function MakeUserInfo({ navigation, getEmail, getPhoneNr }) {

  return (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <Text style={styles.title}>Create your account</Text>
            </View>
            <LoginInput setEmail={() => getEmail} title={"Email"}/>
            <LoginInput setPhoneNr={() => getPhoneNr} title={"Phone number"}/>
            <StatusBar style="auto" />
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
