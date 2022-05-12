import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from "@react-native-picker/picker";


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
                {Object.entries(SchoolInfo.SchoolName).map((value, i) => {
                    <Picker.Item key={i} label={value[i]} value={value[i]} />
                })}

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

export default DropDownSchoolInfo