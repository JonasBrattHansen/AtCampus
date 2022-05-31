import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform} from "react-native";
import GroupPage from "../components/GroupPage";
import Comment from "../components/Comment";
import {Feather} from "@expo/vector-icons";
import UsersComment from "../components/UsersComment";
import {getCommentsByPost, postACommentToPost} from "../services/GroupService";
import {useSelector} from "react-redux";
import auth from "../reducers/auth";
import text from "react-native-web/dist/exports/Text";




export default function GroupComment({route}){
    const {post} = route.params
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")
    const {userId} = useSelector(state => state.auth)

    useEffect(() => {
        getCommentsByPost(post.id)
            .then( (res) => {
                setComments(res.data)
            })
            .catch((err) => {
                console.log("Error in GroupComment: " + err)
            })

    }, [])

    function sendComment() {
        postACommentToPost(post.id, comment, userId)
            .then(() => {
                getCommentsByPost(post.id)
                    .then( (res) => {
                        setComments(res.data)
                    })
                    .catch((err) => {
                        console.log("Error in GroupComment: " + err)
                    })
            })
            .catch((err) => {
                console.log("Error posting comment to post", err)
            })
        setComment("")
    }


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
                    <Text style={styles.name}>{post.userEntity.firstName} {post.userEntity.lastName}</Text>
                    <Text style={styles.groupName}>{GroupPage.name}</Text>
                </View>
                <Text style={styles.date}>5.mar.2020</Text>
            </View>
            <View style={styles.containerPost}>
                <Text style={styles.post}>{post.body}</Text>
            </View>
            <View style={styles.containerChat} >
                <ScrollView>
                    {console.log(comments)}
                    {comments.map(comment => {
                        const text = comment.body
                        const image = comment.userEntity.userProfileImage
                        if(+comment.userEntity.id === +userId){
                            return <UsersComment text={text} image={image}/>
                        }else{
                            return <Comment text={text} image={image}/>
                        }
                    })}
                </ScrollView>
            </View>
            <View style={styles.line}/>
            <View style={styles.commentInput}>
                <TextInput style={styles.input} onChangeText={(val) => setComment(val)} placeholder={"Comment: "} />
                <TouchableOpacity style={styles.sendIcon} onPress={sendComment}>
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
