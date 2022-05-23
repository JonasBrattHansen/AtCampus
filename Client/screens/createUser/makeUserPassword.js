import {Button, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput} from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginButton from "../../components/LoginButton";
import React, {useContext, useState} from "react";
import {Entypo} from "@expo/vector-icons";
import {CreateUserContext} from "../../global/CreateUserContext";

export default function MakeUserPassword({ navigation }) {
    const [passwordAgain, setPasswordAgain] = useState()
    const {password, setPassword} = useContext(CreateUserContext)

    const [securePassword, setSecurePassword] = useState(false)
    const [securePasswordAgain, setSecurePasswordAgain] = useState(false)
    const [eye, setEye] = useState("eye")
    const [eyeAgain, setEyeAgain] = useState("eye")

   function visiblePassword(){
        if (securePassword){
            setEye("eye")
            setSecurePassword(false)
        }else if(!securePassword){
            setEye("eye-with-line")
            setSecurePassword(true)
        }
   }

   function visiblePasswordAgain(){
       if (securePasswordAgain){
           setEyeAgain("eye")
           setSecurePasswordAgain(false)
       }else if(!securePasswordAgain){
           setEyeAgain("eye-with-line")
           setSecurePasswordAgain(true)
       }
   }

  function onPress(){
        if (password === passwordAgain ){
            if(password.length > 8 && password.match(/[0-9]/)){
                navigation.navigate("makeUserComplete")
            }else{
                alert("It needs to contain minimum 8 letters and a number")
            }
        }else{
            alert(`Password and confirm password dose not match.`)
        }
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView>
            <View>
                <Text style={styles.title}>Create your account</Text>
            </View>
            <View>
                <Text style={styles.info}>Password</Text>
                <View style={styles.input}>
                    <TextInput style={{width:280}} secureTextEntry={securePassword} placeholder={"Please enter: Password"} onChangeText={(value) => setPassword(value) } />
                    <TouchableOpacity style={{width:50}} onPress={visiblePassword} >
                        <Entypo  name={eye} size={25}  color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={styles.info}>Confirm password</Text>
                <View  style={styles.input}>
                    <TextInput style={{width:280}} secureTextEntry={securePasswordAgain} placeholder={"Please enter: Password again"}  onChangeText={(value) => setPasswordAgain(value)}/>
                    <TouchableOpacity style={{width:50}} onPress={visiblePasswordAgain}>
                        <Entypo  name={eyeAgain} size={25}  color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
               <LoginButton title={"next"} onPress={onPress}/>
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
    title: {
        marginTop: 40,
        marginBottom: 40,
        padding: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    info: {
        padding:10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#d3d3d3",
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#7C7FCA",
        width: 300,
        borderRadius: 20,
        padding: 10,
        margin: 10,
        marginTop:150,
    },
    next: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    }
});