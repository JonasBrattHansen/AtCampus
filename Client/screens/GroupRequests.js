import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import GroupRequestCard from "../components/GroupRequestCard";
import {addUserToGroupByGroupRequest, getAllGroupRequests} from "../services/GroupService";

const groupRequestData = [
    {
        id: 1,
        userImage: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        school: "Høyskolen Kristiania",
        program: "Programmering",
        text: "wow plx let me join",
        date: "5 March"
    },
    {
        id: 2,
        userImage: "https://images.unsplash.com/photo-1567168539593-59673ababaae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        school: "Høyskolen Kristiania",
        program: "Frontend",
        text: "wow plx let me join plx let me join plx let me join let me join let me join let me join",
        date: "3 March"
    }
]

function Separator() {
    return <View style={styles.separator}/>
}

export default function GroupRequests({navigation, route}){
    const [dummyData, setDummyData] = useState(groupRequestData)
    const [groupRequests, setGroupRequests] = useState([])
    const {group} = route.params

    function handleAddClick(requestId){
        addUserToGroupByGroupRequest(requestId)
            .then((res) => {
                console.log("success")
            })
            .catch((err) => {
                console.log("Error in GroupRequests: " + err)
            })
    }

    useEffect(() => {
        getAllGroupRequests(group.id)
            .then((res) => {
                setGroupRequests(res.data)
            })
            .catch((err) => {
                console.log("Error in GroupRequests: " + err)
            })
    }, [])

    //it has changed
    return (
        <View style={{flex: 1}}>
            <FlatList
                contentContainerStyle={styles.groupRequests}
                data={groupRequests}
                ItemSeparatorComponent={Separator}
                stickyFooterIndices={[0]}
                renderItem={({item}) =>
                    <GroupRequestCard
                        style={{
                            marginHorizontal: 20,
                            marginVertical: 2,
                        }}
                        key={item.id}
                        requestId={item.id}
                        userImage={item.userEntity.userProfileImage}
                        school={item.userEntity.school}
                        program={item.userEntity.program}
                        text={item.userEntity.firstName + " " + item.userEntity.lastName}
                        handleClick={() => {
                            handleAddClick(item.id)
                        }
                        }
                    />
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    requestContainer:{

    },
    separator: {
        height: 10,
    },
    groupRequests: {
        marginBottom: 15
    }
})
