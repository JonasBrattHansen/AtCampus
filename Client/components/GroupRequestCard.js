import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";

export default function GroupRequestCard({userImage, school, program, text, date, style, handleClick, requestId}) {

    return (
        <View
        style={[style, styles.container]}>
            <Image
                style={styles.image}
                source={{uri: userImage}}
            />

            <View style={styles.info}>
                <Text style={styles.school}>{school}</Text>
                <Text style={styles.program}>{program}</Text>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View>
                <Text style={styles.date}>{date}</Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={ () => handleClick(requestId)}
                >
                    <Feather style={styles.checkmark} name={"check"} color={"black"} size={32} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#f8f8f8",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    info: {
        display: "flex",
        marginRight: "auto",
    },
    school: {
        fontSize: 15,
    },
    program: {
        fontSize: 15,
        fontWeight: "bold",
    },
    text: {
        flexShrink: 1,
        maxWidth: 180
    },
    date: {
        display: "flex",
        justifyContent: "center",
        top: -10
    },
    checkmark: {
        display: "flex",
        alignSelf: "center",
        top: 10
    },
});

