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

    const [valueSchool, setValueSchool] = useState("Høyskolen kristiania");
    const [valueProgram, setValueProgram] = useState("");

    function getProgramFromSchool(){
        const school = SchoolInfo.find((element) => element.SchoolName === valueSchool)
        return school.program
    }

    return (
        <View style={styles.container}>
            <View style={styles.styleSchool}>
                <Picker
                    selectedValue={valueSchool}
                    onValueChange={(itemValue, itemIndex) => setValueSchool(itemValue)}
                >
                    {SchoolInfo.map((value, i) => (
                        <Picker.Item key={i} label={value.SchoolName} value={value.SchoolName} />
                    ))}
                </Picker>
            </View>
            <View style={styles.styleProgram}>
                <Picker
                    selectedValue={valueProgram}
                    onValueChange={(itemValue, itemIndex) => setValueProgram(itemValue)}
                >
                    {getProgramFromSchool().map((value, i) => (
                        <Picker.Item  key={i} label={value} value={value}   />
                    )) }
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
    },
    styleSchool:{
        padding: 0,
        height: 50,
        margin: 25,
        width: 300,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#d3d3d3",
        borderRadius: 10

    },
    styleProgram:{
        padding: 0,
        height: 50,
        width: 300,
        margin: 25,
        borderWidth: 1,
        overflow: "hidden",
        borderColor: "#d3d3d3",
        borderRadius: 10
    }
});

export default DropDownSchoolInfo