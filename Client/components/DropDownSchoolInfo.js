import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const DropDownSchoolInfo = () => {

    const SchoolInfo = [
        {
            SchoolName: "Høyskolen kristiania",
            program: [
                "Frontend og mobilutvikling",
                "Programmering",
                "E-bussnins",
                "interaktivt-Dessign",
                "Marketsføring"
            ]
        },
        {
            SchoolName: "OsloMet",
            program: [
                "Jeg vet ikke hva de har",
                "men det er sikkert",
                "noe",
                "Bra",
            ]
        },
        {
            SchoolName: "UIO",
            program: [
                "Help",
                "Me",
            ]
        }
    ]

    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});