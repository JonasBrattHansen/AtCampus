import React, {useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import GroupPage from "../components/GroupPage";
import Comment from "../components/Comment";
import {Feather} from "@expo/vector-icons";
import UsersComment from "../components/UsersComment";




export default function GroupComment({route}){

    const [comment, setComment] = useState()
    const {post} = route.params

    return(
        <KeyboardAvoidingView style={styles.container}
                              behavior= {(Platform.OS === 'ios') ? "padding" : null}
                              keyboardVerticalOffset={Platform.select({ios: 70, android: 0})}
        >
            <View style={styles.userContainer}>
                <Image style={styles.image}
                       source={require("../Images/student.png")}
                />

                <View style={{alignItems:"flex-start"}}>
                    <Text style={styles.name}>Victoria Hansen</Text>
                    <Text style={styles.groupName}>{GroupPage.name}</Text>
                </View>
                <Text style={styles.date}>5.mar.2020</Text>
            </View>
            <View style={styles.containerPost}>
                <Text style={styles.post}>Nå skriver jeg bare nie inni her osm skal vare selve posten fra denne pestonen.
                    Nå skriver jeg bare nie inni her osm skal vare selve posten fra denne pestonen.</Text>
            </View>
            <View style={styles.containerChat} >
                <ScrollView>
                    <Comment/>
                    <UsersComment/>
                    <Comment/>
                    <UsersComment/>
                    <Comment/>
                    <UsersComment/>
                </ScrollView>
            </View>
            <View style={styles.line}/>
            <View style={styles.commentInput}>
                <TextInput style={styles.input} onChangeText={(val) => setComment(val)} placeholder={"Comment: "} />
                <TouchableOpacity style={styles.sendIcon}>
                    <Feather name={"send"} size={25} color={"black"} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 10,
    },
    userContainer: {
        display: "flex",
        flex: 0.3,
        flexDirection: "row",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
    },
    containerPost:{
        flex: 0.3,
    },
    containerChat:{
        flex: 2,
    },
    groupName: {
        fontSize: 15,
        fontWeight: "bold",
    },
    name: {
        display: "flex",
        marginRight: "auto",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    commentInput: {
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#d3d3d3",
        backgroundColor: "#fff",
        paddingVertical: 15,
        width: "80%",
        height: "50%",
        paddingHorizontal: 10,
        flexDirection: "row",
        marginLeft: 10,
    },
    sendIcon: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        marginRight: 5,
    },
    date:{
        paddingHorizontal: 50,
        color: "#9b9a9a"
    },
    post:{
        maxWidth: "95%"
    },
    line: {
        flex: 0.007,
        backgroundColor: "#efefef"
    }
})