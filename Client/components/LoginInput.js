import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput } from "react-native";

export default function LoginInput({title, onChangeText, keyboardType}) {

    return (
        <View style={styles.container}>
                <Text style={styles.info}>{title}</Text>
                    <TextInput style={styles.input} onChangeText={onChangeText} placeholder={"Please enter: " + title} keyboardType={keyboardType} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderRadius: 20,
        padding: 10,
    },
    info: {
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#d3d3d3",
        paddingVertical: 15,
        width: "100%",
        paddingHorizontal: 10,
    },
});