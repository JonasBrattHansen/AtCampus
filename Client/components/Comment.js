import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image} from "react-native";




export default function Comment(){
    return(
        <View style={styles.container}>
                <Image style={styles.image}
                       source={require("../Images/student.png")} />
            <View style={styles.comment}>
                <Text style={styles.textStyle}>
                    This is the text
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
    },
    comment: {
        maxWidth: '80%',
        fontSize: 13,
        padding: 15,
        borderRadius: 70,
        backgroundColor: "#eae9e9",
        alignSelf: "center",

    },
    image: {
        width: 35,
        height: 35,
        margin: 10,
    },
    textStyle: {
        color: "black",
        textAlign: "center"
    }
})