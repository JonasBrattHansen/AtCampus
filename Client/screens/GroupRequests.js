import React, {useState} from 'react'
import {FlatList, StyleSheet, Text, View} from "react-native";
import GroupRequestCard from "../components/GroupRequestCard";

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

export default function GroupRequests({navigation}){
    const [dummyData, setDummyData] = useState(groupRequestData)


    function handleAddClick(requestId){
        console.log(requestId)
        setDummyData( dummyData.filter(request => request.id !== requestId) )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                contentContainerStyle={styles.groupRequests}
                data={dummyData}
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
                        userImage={item.userImage}
                        school={item.school}
                        program={item.program}
                        text={item.text}
                        date={item.date}
                        handleClick={handleAddClick}
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
