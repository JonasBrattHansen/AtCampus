import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput } from "react-native";

export default function LoginInput({title, onChangeText, keyboardType}) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.info}>{title}</Text>
                <View style={styles.input}>
                    <TextInput onChangeText={onChangeText} placeholder={"Please enter: " + title} keyboardType={keyboardType} />
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