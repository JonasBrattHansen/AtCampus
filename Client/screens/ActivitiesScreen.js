//import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
    FlatList, Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground, StatusBar
} from "react-native";

import PostPreview from "../components/PostPreview";
import GroupPage from "../components/GroupPage";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import SimpleButton from "../components/SimpleButton";

const postPreviews = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name: "Victoria Hansen",
        title: "Math Study Group",
        preview: "My lovely post",
        date: "4 March",
    }
];

const headerImage=require("../assets/images/student.jpg");

function Separator() {
    return <View style={styles.separator}/>
}


function GroupScreen() {

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={headerImage} style={styles.ImageBackground}>
                <StatusBar style="auto" />
            </ImageBackground>

            <View style={{ flex: 0.27, padding: 10 }}>
                <Text style={styles.groupName}>
                    {GroupPage.name}
                </Text>
                <Text style={styles.description}>
                    {GroupPage.description}
                </Text>
                <Text style={styles.memberCount}>
                    Members: {GroupPage.memberCount}
                </Text>
            </View>
            <View style={{ flex: 0.9 }}>
                <Text style={styles.subtitle}>
                    Recent Activity
                </Text>
                <FlatList
                    contentContainerStyle={styles.postPreviews}
                    data={postPreviews}
                    ItemSeparatorComponent={Separator}
                    stickyFooterIndices={[0]}
                    renderItem={({item}) =>
                        <PostPreview
                            style={{
                                marginHorizontal: 20,
                                marginVertical: 2,
                            }}
                            key={item.id}
                            image={item.image}
                            title={item.name}
                            preview={item.preview}
                            date={item.date}
                        />
                    }
                />
            </View>
            <View style={ styles.bottomContainer }>
                <View stylye={styles.postButtonContainer}>
                    <SimpleButton text={"Left"}></SimpleButton>
                </View>
                <View style={styles.settingButtonContainer}>
                    <SimpleButton text={"Post"}></SimpleButton>
                </View>
                <View style={styles.requestButtonContainer}>
                    <SimpleButton text={"Righ"}></SimpleButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flex: 1,
        backgroundColor: "#000",
    },
    blur: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        flex: 1,
        zIndex: 0,
    },
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        //marginBottom: 10,
    },
    groupName: {
        fontSize: 25,
        textAlign: "center",
        padding: 5,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        padding: 5,
    },
    memberCount: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: "center",
        fontWeight: "bold",
    },
    separator: {
        height: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
        marginTop: 15,
        marginLeft: 10,
    },
    postPreviews: {
        marginBottom: 15,
    },
    bottomContainer: {
        display: "flex",
        flex: 0.15,
        flexDirection: "row",
        padding:5,
        paddingLeft: 15,
        alignContent: "space-between",
    },
    buttonContainer: {
        display: "flex",
        flex: 0.5,
    },
    ImageBackground: {
        flex: 0.4,
        resizeMode: "center",
        width: "100%",
        alignItems: "center",
    },
    postButtonContainer: {
        flex: 5
    },
    settingButtonContainer: {
        flex: 1
    },
    requestButtonContainer: {
        flex: 1
    },


});

export default GroupScreen;