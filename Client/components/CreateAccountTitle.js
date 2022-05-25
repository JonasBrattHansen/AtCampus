import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View, TextInput } from "react-native";

export default function CreateAccountTitle() {

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Create your account</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
        marginTop: 50,
    },
    title: {
        padding: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
});