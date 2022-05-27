import React from 'react'
import { StyleSheet, View } from 'react-native'


const ContentSeparator = (border) => (
    <View style={styles.container}>
        <View style={{ borderColor: "#7c7fca", borderWidth: border }} />
    </View>
)

const styles = StyleSheet.create({
    separator: {
        flex: 8,
        flexDirection: "row",
        borderColor: "#7c7fca",
        borderWidth: 0.7,
    },
})

export default ContentSeparator