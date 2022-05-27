import React from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image} from "react-native";




export default function UsersComment(){
    return(
        <View style={styles.container}>
            <View style={styles.comment}>
                <Text style={styles.textStyle}>
                    This is the text, if it is bigger then the other one. noe som den er, jeg gidder ikke å skriv ei engelsk mer. fuck tthis shit.
                </Text>
            </View>
                <Image style={styles.image}
                       source={require("../Images/student.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "flex-end",
        flexDirection: "row",
        padding: 10,
    },
    comment: {
        maxWidth: '80%',
        fontSize: 13,
        padding: 12,
        borderRadius: 70,
        backgroundColor: "#3139ee",
        alignSelf: "center",

    },
    image: {
        width: 35,
        height: 35,
        margin: 10,
    },
    textStyle: {
        color: "white",
        textAlign: "center"
    }
})