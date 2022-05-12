import React from 'react';
import {StyleSheet, Text, View, TextInput } from "react-native";

export default function LoginInput({title}) {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{title}</Text>
                <View>
                    <TextInput style={styles.input} placeholder={"Please enter: " + title} />
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
    title: {
        marginLeft: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    input: {
        height: 50,
        margin: 10,
        width: 320,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: "#d3d3d3"
    },
});