import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput } from "react-native";
import {CreateUserContext} from "../global/CreateUserContext";

export default function LoginInput({title}) {
    const [info, setInfo] = useState("")
    const {
        setFirstname,
        setLastname,
        setEmail,
        setPhoneNr
    } = useContext(CreateUserContext)

        function getInfo(value){
            setInfo(value)
            if(title === "First name"){
                setFirstname(info)

            }else if(title === "Last name"){
                setLastname(info)

            }else if(title === "Email"){
                setEmail(info)
            }else{
                setPhoneNr(info)
            }
        }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.info}>{title}</Text>
                <View style={styles.input}>
                    <TextInput onChangeText={value => getInfo(value)} placeholder={"Please enter: " + title} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
    },
    info: {
        padding:10,
        fontSize: 18,
        fontWeight: "bold",
    },
    input: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#d3d3d3",
        paddingVertical: 15,
        width: 320,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
});