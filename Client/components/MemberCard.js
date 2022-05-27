import {StyleSheet, View, Image, Text, TouchableOpacity} from "react-native";
import React from "react";
import {Feather} from "@expo/vector-icons";

export default function MemberCard({username, image, datejoined, style, memberId, handleDelete}) {
    return (
        <View
        style={[style, styles.container]}>
            <Image
                style={styles.image}
                source={{uri: image}}
            />

            <View>
                <Text style={styles.name}>{username}</Text>
                <Text style={styles.date}>This needs to be changed btw {datejoined}</Text>
            </View>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={ () => handleDelete(memberId)}
            >
                <Feather style={styles.cross} name={"check"} color={"black"} size={32}/>
            </TouchableOpacity>

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
    name: {
        fontWeight: "bold",
    },
    cross: {
        display: "flex",
        alignSelf: "center",
        left: 20
    },
    date: {
        maxWidth: 190
    }
})
